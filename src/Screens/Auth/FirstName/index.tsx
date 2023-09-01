import React, { useState, useEffect } from 'react';
import { Platform, Text, View, NativeModules, ScrollView } from 'react-native';
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

interface FirstNameProps {
    navigation: any;
}

const FirstName: React.FC<FirstNameProps> = (props) => {
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

    const validation = async () => {
        if (firstName === '') {
            Toast.show(
                language === 'en' || language === 'en_US'
                    ? English['FirstName-Empty']
                    : German['FirstName-Empty'],
                Toast.LONG
            );
        } else {
            props.navigation.navigate('DueDate', { firstName: firstName });
        }
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Header
                    image={allImages.couch}
                    isFullImage
                    isBackIcon
                    onBackPress={() => props.navigation.goBack()}
                />

                <View style={styles.middleContainer}>
                    <Titles
                        title={
                            language === 'en' || language === 'en_US'
                                ? English['FirstName-Title']
                                : German['FirstName-Title']
                        }
                    />
                    <View style={styles.spacer} />
                    <TextInputs
                        onChangeText={(text) => setFirstName(text)}
                        placeholder={
                            language === 'en' || language === 'en_US'
                                ? English['Your-Name']
                                : German['Your-Name']
                        }
                        value={firstName}
                        isPassword={false}
                    />
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.bottomContainer}>
                <Button
                    onPress={() => validation()}
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Continue']
                            : German['Continue']
                    }
                    isBackground
                    isSuccess={firstName !== ''}
                />
            </View>
        </View>
    );
};

export default FirstName;
