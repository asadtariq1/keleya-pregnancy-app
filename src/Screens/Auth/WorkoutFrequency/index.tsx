import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, NativeModules, ImageBackground } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Header } from '../../../Components/Headers/Header';
import { Button } from '../../../Components/Buttons/Button';
import { Picker } from '@react-native-picker/picker';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';
import ScrollPicker from "react-native-wheel-scrollview-picker";

interface WorkoutFrequencyProps {
    route: any;
    navigation: any;
}

const WorkoutFrequency: React.FC<WorkoutFrequencyProps> = ({ route, navigation }) => {
    const [workoutFrequency, setWorkoutFrequency] = useState<string>("3");
    const [language, setLanguage] = useState<string>('');
    const pickerRef = useRef<Picker | null>(null);

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
            <Header
                isText
                titleText={
                    language === 'en' || language === 'en_US'
                        ? English['WorkoutFrequency-Title']
                        : German['WorkoutFrequency-Title']
                }
                image={allImages.workoutGoal}
                isFullImage
                isBackIcon
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.middleContainer}>
                <Picker
                    ref={(ref) => (pickerRef.current = ref)}
                    selectedValue={workoutFrequency}
                    onValueChange={(itemValue, itemIndex) =>
                        setWorkoutFrequency(itemValue)
                    }>
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Once-Week']
                                : German['Once-Week']
                        }
                        value="1"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Two-Week']
                                : German['Two-Week']
                        }
                        value="2"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Three-Week']
                                : German['Three-Week']
                        }
                        value="3"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Four-Week']
                                : German['Four-Week']
                        }
                        value="4"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Five-Week']
                                : German['Five-Week']
                        }
                        value="5"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Six-Week']
                                : German['Six-Week']
                        }
                        value="6"
                    />
                    <Picker.Item
                        label={
                            language === 'en' || language === 'en_US'
                                ? English['Seven-Week']
                                : German['Seven-Week']
                        }
                        value="7"
                    />
                </Picker>
            </View>

            <View style={styles.bottomContainer}>
                <Button
                    onPress={() => navigation.navigate('Success')}
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Continue']
                            : German['Continue']
                    }
                    isBackground
                    isSuccess
                />
            </View>
        </View>
    );
};

export default WorkoutFrequency;
