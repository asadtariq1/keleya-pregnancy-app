import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, NativeModules, Platform } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Button } from '../../../Components/Buttons/Button';
import { Titles } from '../../../Components/Title/Titles';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';

interface IntroProps {
  navigation: any;
}

const Intro: React.FC<IntroProps> = (props) => {
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

  return (
    <ImageBackground
      source={allImages.intro}
      resizeMode="cover"
      style={styles.container}
    >
      <Image source={allImages.logo} style={styles.logoImage} />
      <Titles
        isIntroTitle
        title={
          language === 'en' || language === 'en_US'
            ? English['Intro-Title']
            : German['Intro-Title']
        }
      />

      <View style={styles.bottomContainer}>
        <Button
          title={
            language === 'en' || language === 'en_US'
              ? English['Get-Started']
              : German['Get-Started']
          }
          isBackground
          onPress={() => props.navigation.navigate('SignUp')}
        />
        <Button
          title={
            language === 'en' || language === 'en_US'
              ? English['Login']
              : German['Login']
          }
          onPress={() => props.navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default Intro;
