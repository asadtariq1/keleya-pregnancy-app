import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';

export const Button = props => {
    const {
        onPress,
        title,
        isBackground,
        isSuccess,
    } = props;
    return (
        <>
            {isBackground ? (
                <TouchableOpacity style={[styles.buttonContainerWithBackground, { backgroundColor: isSuccess ? appColors.SUCCESS : appColors.WARM_GREY }]} onPress={onPress}>
                    <Text style={styles.textContainerWithBackground}>{title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.textContainerWithoutBackground}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainerWithBackground: {
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textContainerWithBackground: {
        color: appColors.WHITE,
        marginVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(2.6),
        fontFamily: appFont.boldFont,
    },
    textContainerWithoutBackground: {
        fontSize: responsiveFontSize(2.4),
        fontFamily: appFont.mediumFont,
        color: appColors.GREYISH_BROWN,
        marginTop: responsiveHeight(2)
    }
})