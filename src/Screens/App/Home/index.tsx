import React, { useState, useEffect } from 'react';
import { Platform, Text, View, ScrollView, NativeModules } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Flatlists } from '../../../Components/Flatlist/Flatlists';
import { recommendedData, courseData } from '../../../DummyData/DummyData';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';

interface HomeProps {
    navigation: any;
}

const Home: React.FC<HomeProps> = (props) => {
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
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerInnerContainer}>
                    <Text style={styles.helloTitle}>
                        {language === 'en' || language === 'en_US'
                            ? English['Hello']
                            : German['Hello']}{' '}
                        Erika
                    </Text>
                    <Text style={styles.locationTitle}>
                        2 Wochen seit deiner Geburt
                    </Text>
                </View>
            </View>

            <ScrollView
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.spacer} />
                <Flatlists
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Recommended']
                            : German['Recommended']
                    }
                    data={recommendedData}
                />

                <View style={styles.spacer} />
                <Flatlists
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Courses']
                            : German['Courses']
                    }
                    data={courseData}
                />
            </ScrollView>
        </View>
    );
};

export default Home;
