import React, { useState, useEffect } from 'react';
import { Platform, Text, View, NativeModules, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { appColors } from '../../../Constants/Colors';
import { Header } from '../../../Components/Headers/Header';
import { Titles } from '../../../Components/Title/Titles';
import { Button } from '../../../Components/Buttons/Button';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';

interface SuccessProps {
    navigation: any;
}

const Success: React.FC<SuccessProps> = (props) => {
    const [firstName, setFirstName] = useState<string>('');
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
        <SafeAreaView style={styles.container}>
            <View style={styles.middleContainer}>
                <EvilIcons name='bell' size={60} color={appColors.GREYISH_BROWN} />
                <View style={styles.spacer1} />
                <Titles
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Notification-Title']
                            : German['Notification-Title']
                    }
                />
            </View>

            <Header
                image={allImages.notifications}
                isFullImage
                onBackPress={() => props.navigation.goBack()}
            />

            <View style={styles.bottomContainer}>
                <Button
                    title={language === 'en' || language === 'en_US' ? English['Skip'] : German['Skip']}
                    onPress={() => props.navigation.navigate('App')}
                />
                <View style={styles.spacer2} />
                <Button
                    onPress={() => props.navigation.navigate('App')}
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Allow-Notifications']
                            : German['Allow-Notifications']
                    }
                    isBackground
                    isSuccess
                />
            </View>
        </SafeAreaView>
    );
};

export default Success;
