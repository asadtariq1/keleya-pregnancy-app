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
    headerContainer: {
        backgroundColor: '#EFEAFA',
        borderRadius: 20
    },
    headerInnerContainer: {
        marginTop: Platform.OS === 'ios' ? responsiveHeight(6) : responsiveHeight(2),
        width: '90%',
        alignSelf: 'center',
        marginBottom: responsiveHeight(3)
    },
    helloTitle: {
        fontSize: responsiveFontSize(3.5),
        fontFamily: appFont.boldFont,
    },
    locationTitle: {
        fontSize: responsiveFontSize(2),
        fontFamily: appFont.mediumFont,
        marginTop: responsiveHeight(1),
        color: appColors.WARM_GREY
    },
    spacer: {
        marginVertical: responsiveHeight(2)
    }
})