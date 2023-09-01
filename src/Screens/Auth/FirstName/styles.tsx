import { Platform, RefreshControlBase, StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { appColors } from '../../../Constants/Colors';
import { appFont } from '../../../Constants/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.WHITE,
    },
    middleContainer: {
        alignItems: 'center',
        marginTop: responsiveHeight(4)
    },
    bottomContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: responsiveHeight(5),
        width: '100%'
    },
    forgotText: {
        marginBottom: responsiveHeight(3),
        fontFamily: appFont.regularFont,
        fontSize: responsiveFontSize(2.3),
    },
    spacer: {
        marginTop: responsiveHeight(2)
    }
})