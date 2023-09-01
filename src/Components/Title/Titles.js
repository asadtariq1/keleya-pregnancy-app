import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';

export const Titles = props => {
    const {
        title,
        isIntroTitle,
    } = props;
    return (
        <>
            {isIntroTitle ? (
                <Text style={styles.text}>{title}</Text>
            ) : (
                <Text style={styles.text1}>{title}</Text>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: responsiveFontSize(2.9),
        fontFamily: appFont.mediumFont,
        color: appColors.GREYISH_BROWN,
        width: '80%',
        textAlign: 'center',
        marginTop: responsiveHeight(1)
    },
    text1: {
        fontSize: responsiveFontSize(2.9),
        fontFamily: appFont.mediumFont,
        color: appColors.GREYISH_BROWN,
        textAlign: 'center',
        width: '80%',
    },
})