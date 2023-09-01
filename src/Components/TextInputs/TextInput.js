import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';

export const TextInputs = props => {
    const {
        onChangeText,
        placeholder,
        value,
        isPassword,
        isEmail,
        viewPassword,
        onViewPassword
    } = props;
    return (
        <View style={styles.mainContainer}>
            {!isPassword ? (
                <TextInput
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}
                    style={[styles.textInputStyle, { textAlign: !isEmail ? 'center' : 'left' }]}
                    placeholderTextColor={appColors.BUBBLE_GUM}
                    keyboardType='email-address'
                />
            ) : (
                <View style={styles.passwordContainer}>
                    <TextInput
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        value={value}
                        secureTextEntry={viewPassword}
                        style={styles.textInputStylePassword}
                        placeholderTextColor={appColors.BUBBLE_GUM}
                    />
                    <TouchableOpacity style={styles.eyeIcon} onPress={onViewPassword}>
                        {viewPassword ? (
                            <Entypo name='eye' size={20} color={appColors.GREYISH_BROWN} />
                        ) : (
                            <Entypo name='eye-with-line' size={20} color={appColors.GREYISH_BROWN} />
                        )}
                    </TouchableOpacity>
                </View>
            )}
        </View>
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
    textInputStyle: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: Platform.OS === 'ios' ? responsiveHeight(1) : 0,
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2),
    },
    textInputStylePassword: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: Platform.OS === 'ios' ? responsiveHeight(1) : 0,
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2)
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    eyeIcon: {
        marginLeft: responsiveWidth(3)
    }
})