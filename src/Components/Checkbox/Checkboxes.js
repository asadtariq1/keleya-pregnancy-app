import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { appFont } from '../../Constants/Fonts';

export const Checkboxes = props => {
    const {
        isPrivacy,
        isPrivacyChecked,
        onPrivacyBtnPress,
        isTermsChecked,
        onTermsBtnPress,
        privacyText,
        termsText
    } = props;
    return (
        <>
            {isPrivacy ? (
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.checkBtnContainer} onPress={onPrivacyBtnPress}>
                        {isPrivacyChecked ? (
                            <MaterialCommunityIcons name='checkbox-intermediate' size={20} color={appColors.GREYISH_BROWN} />
                        ) : (
                            <MaterialCommunityIcons name='checkbox-blank-outline' size={20} color={appColors.GREYISH_BROWN} />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.titleText}>{privacyText}</Text>
                </View>
            ) : (
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.checkBtnContainer} onPress={onTermsBtnPress}>
                        {isTermsChecked ? (
                            <MaterialCommunityIcons name='checkbox-intermediate' size={20} color={appColors.GREYISH_BROWN} />
                        ) : (
                            <MaterialCommunityIcons name='checkbox-blank-outline' size={20} color={appColors.GREYISH_BROWN} />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.titleText}>{termsText}</Text>
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2)
    },
    checkBtnContainer: {
        marginRight: responsiveWidth(3)
    },
    titleText: {
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2),
    },
    titleButtonText: {
        fontFamily: appFont.regularFont,
        fontSize: responsiveFontSize(2),
    }
})