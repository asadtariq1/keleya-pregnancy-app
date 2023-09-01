import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Platform } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';
import DeviceInfo from 'react-native-device-info';

export const Header = props => {
    const {
        onBackPress,
        image,
        isFullImage,
        isText,
        titleText,
        isBackIcon
    } = props;

    const [haveNotch, setHaveNotch] = useState(false);
    useEffect(() => {
        let checkNotch = DeviceInfo.hasNotch();
        setHaveNotch(checkNotch)
    }, []);

    return (
        <>
            <Image source={image} style={[styles.image, { height: isFullImage ? Platform.OS === 'ios'?responsiveHeight(58):responsiveHeight(53) : Platform.OS === 'ios' ? responsiveHeight(48) : responsiveHeight(43) }]} />
            <View style={styles.mainContainer}>
                {isBackIcon ? (
                    <TouchableOpacity style={[styles.backBtnContainer, {marginTop: haveNotch ?responsiveHeight(6):responsiveHeight(3)}]} onPress={onBackPress}>
                        <Entypo name='arrow-long-left' size={26} color={appColors.GREYISH_BROWN} />
                    </TouchableOpacity>
                ) : (null)}
                {isText ? (
                    <Text style={styles.text1}>{titleText}</Text>
                ) : (null)}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    image: {
        width: '100%',
    },
    mainContainer: {
        position: 'absolute',
        width: '100%'
    },
    backBtnContainer: {
        marginLeft: responsiveWidth(4)
    },
    text1: {
        fontSize: responsiveFontSize(2.9),
        fontFamily: appFont.regularFont,
        color: appColors.GREYISH_BROWN,
        textAlign: 'center',
        fontWeight: '300',
        width: '80%',
        alignSelf: 'center',
        marginTop: responsiveHeight(2)
    },
})