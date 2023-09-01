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
        alignItems: 'center'
    },
    logoImage: {
        width: responsiveWidth(25),
        height: responsiveHeight(15),
        resizeMode: 'contain',
        marginTop: responsiveHeight(7)
    },
    bottomContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? responsiveHeight(7) : responsiveHeight(4),
        width: '100%',
        alignItems: 'center'
    }
})