import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export const DatePicker = props => {
    const {
        emptyText,
        onPress,
        dueDate
    } = props;

    return (
        <>
            <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
                <Text style={dueDate ? styles.textInputActiveStyle : styles.textInputInActiveStyle}>{dueDate ? dueDate : emptyText}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        width: '80%',
        borderBottomColor: appColors.GREYISH_BROWN,
        alignItems: 'center',
        marginTop: responsiveHeight(3)
    },
    textInputActiveStyle: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: responsiveHeight(1),
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2),
        textAlign: 'center'
    },
    textInputInActiveStyle: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: responsiveHeight(1),
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        color: 'gray'
    },
})