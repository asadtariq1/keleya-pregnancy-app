import React, { useState, useEffect } from 'react';
import { Platform, View, NativeModules } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Header } from '../../../Components/Headers/Header';
import { Titles } from '../../../Components/Title/Titles';
import { TextInputs } from '../../../Components/TextInputs/TextInput';
import { Button } from '../../../Components/Buttons/Button';
import { Checkboxes } from '../../../Components/Checkbox/Checkboxes';
import Toast from 'react-native-simple-toast';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface SignUpProps {
    navigation: any;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [viewPassword, setViewPassword] = useState(true);
    const [isPrivacyChecked, setisPrivacyChecked] = useState(false);
    const [isTermsChecked, setisTermsChecked] = useState(false);
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
        } else if (!isPrivacyChecked) {
            Toast.show(
                language === 'en' || language === 'en_US'
                    ? English['Privacy-Check']
                    : German['Privacy-Check'],
                Toast.LONG
            );
        } else if (!isTermsChecked) {
            Toast.show(
                language === 'en' || language === 'en_US'
                    ? English['Terms-Check']
                    : German['Terms-Check'],
                Toast.LONG
            );
        } else {
            props.navigation.navigate('FirstName');
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
                            ? English['Signup-Title']
                            : German['Signup-Title']
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

                <View style={styles.checkBoxContainer}>
                    <Checkboxes
                        isPrivacy={true}
                        isPrivacyChecked={isPrivacyChecked}
                        privacyText={
                            language === 'en' || language === 'en_US'
                                ? English['Privacy-Policy']
                                : German['Privacy-Policy']
                        }
                        onPrivacyBtnPress={() => setisPrivacyChecked(!isPrivacyChecked)}
                    />
                    <Checkboxes
                        isPrivacy={false}
                        isTermsChecked={isTermsChecked}
                        termsText={
                            language === 'en' || language === 'en_US'
                                ? English['Terms-Conditions']
                                : German['Terms-Conditions']
                        }
                        onTermsBtnPress={() => setisTermsChecked(!isTermsChecked)}
                    />
                </View>
            </View>
            </KeyboardAwareScrollView>

            <View style={styles.bottomContainer}>
                <Button
                    onPress={() => validation()}
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Create-Account']
                            : German['Create-Account']
                    }
                    isBackground
                    isSuccess={
                        email &&
                        isEmailValid &&
                        password &&
                        isPrivacyChecked &&
                        isTermsChecked &&
                        isPasswordValid
                    }
                />
            </View>
        </View>
    );
};

export default SignUp;
