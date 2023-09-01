import { Platform, RefreshControlBase, StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { appColors } from '../../../Constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: responsiveWidth(30),
        height: responsiveHeight(20),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    activityIndicatorContainer: {
        marginTop: responsiveHeight(6)
    }
})