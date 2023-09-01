import React, { useState, useEffect } from 'react';
import { Platform, Text, View, NativeModules, ImageBackground } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Header } from '../../../Components/Headers/Header';
import { Titles } from '../../../Components/Title/Titles';
import { TextInputs } from '../../../Components/TextInputs/TextInput';
import { Button } from '../../../Components/Buttons/Button';
import Toast from 'react-native-simple-toast';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);
  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0];
      setLanguage(locale);
    } else {
      const locale = NativeModules.I18nManager.localeIdentifier;
      setLanguage(locale);
    }
  }, []);

  const validation = async () => {
    if (email === '') {
      Toast.show(
        language === 'en' || language === 'en_US'
          ? English['Email-Empty']
          : German['Email-Empty'],
        Toast.LONG
      );
    } else if (!isEmailValid) {
      Toast.show(
        language === 'en' || language === 'en_US'
          ? English['Email-Valid']
          : German['Email-Valid'],
        Toast.LONG
      );
    } else if (password === '') {
      Toast.show(
        language === 'en' || language === 'en_US'
          ? English['Password-Empty']
          : German['Password-Empty'],
        Toast.LONG
      );
    } else if (!isPasswordValid) {
      Toast.show(
        language === 'en' || language === 'en_US'
          ? English['Password-Valid']
          : German['Password-Valid'],
        Toast.LONG
      );
    } else {
      props.navigation.navigate('App');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Header
          image={allImages.authentication}
          isBackIcon
          onBackPress={() => props.navigation.goBack()}
        />

        <View style={styles.middleContainer}>
          <Titles
            title={
              language === 'en' || language === 'en_US'
                ? English['Signin-Title']
                : German['Signin-Title']
            }
          />
          <TextInputs
            onChangeText={(text) => {
              setEmail(text);
              let emailRegex =
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
              if (emailRegex.test(email)) {
                setIsEmailValid(true);
              }
            }}
            placeholder={'example@gmail.com'}
            value={email}
            isPassword={false}
            isEmail
          />

          <TextInputs
            onChangeText={(text) => {
              setPassword(text);
              let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
              if (passwordRegex.test(text)) {
                setIsPasswordValid(true);
              }
            }}
            placeholder={
              language === 'en' || language === 'en_US'
                ? English['Password']
                : German['Password']
            }
            value={password}
            isPassword={true}
            viewPassword={viewPassword}
            onViewPassword={() => setViewPassword(!viewPassword)}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.bottomContainer}>
        <Text style={styles.forgotText}>
          {language === 'en' || language === 'en_US'
            ? English['Forgot-Password']
            : German['Forgot-Password']}
        </Text>
        <Button
          onPress={() => validation()}
          title={
            language === 'en' || language === 'en_US'
              ? English['Log-inBtn']
              : German['Log-inBtn']
          }
          isBackground
          isSuccess={email && password && isEmailValid && isPasswordValid}
        />
      </View>
    </View>
  );
};

export default SignIn;
