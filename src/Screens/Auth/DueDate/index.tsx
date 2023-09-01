import React, { useState, useEffect } from 'react';
import { Platform, Text, View, NativeModules, ImageBackground } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { Header } from '../../../Components/Headers/Header';
import { Titles } from '../../../Components/Title/Titles';
import { Button } from '../../../Components/Buttons/Button';
import { DatePicker } from '../../../Components/Pickers/DatePicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import English from '../../../Language/English.json';
import German from '../../../Language/German.json';

interface DueDateProps {
    route: {
        params: {
            firstName: string;
        };
    };
    navigation: any;
}

const DueDate: React.FC<DueDateProps> = ({ route, navigation }) => {
    const { firstName } = route.params;
    const [language, setLanguage] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

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

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDueDate(moment(date).format('DD-MM-YYYY'));
        hideDatePicker();
    };

    const validation = async () => {
        if (dueDate === '') {
            Toast.show(
                language === 'en' || language === 'en_US'
                    ? English['Duedate-Empty']
                    : German['Duedate-Empty'],
                Toast.LONG
            );
        } else {
            navigation.navigate('WorkoutFrequency');
        }
    };

    return (
        <View style={styles.container}>
            <Header
                image={allImages.dueDate}
                isFullImage
                isBackIcon
                onBackPress={() => navigation.goBack()}
            />

            <View style={styles.middleContainer}>
                <Titles
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['DueDate-Title']
                            : German['DueDate-Title'] + firstName + '?'
                    }
                />
                <View style={styles.spacer} />
                <DatePicker
                    onPress={() => setDatePickerVisibility(true)}
                    dueDate={dueDate}
                    emptyText={
                        language === 'en' || language === 'en_US'
                            ? English['Select-Date']
                            : German['Select-Date']
                    }
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date()}
                />
            </View>

            <View style={styles.bottomContainer}>
                <Button
                    onPress={() => validation()}
                    title={
                        language === 'en' || language === 'en_US'
                            ? English['Continue']
                            : German['Continue']
                    }
                    isBackground
                    isSuccess={dueDate !== ''}
                />
            </View>
        </View>
    );
};

export default DueDate;
