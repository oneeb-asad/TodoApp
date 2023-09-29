import { StyleSheet } from "react-native";
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { color, commonStyle } from "@constants";
import { family } from "@assets";
import { height, width } from "@helpers";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowBack: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: color.black50
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: wp(18),
    },
    backLeftBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: wp(18),
    },
    backLeftBtnLeft: {
        backgroundColor: color.primary50,
        left: 0,
    },

    backRightBtnRight: {
        backgroundColor: color.red50,
        right: 0,
    },

    listStyle: {
        flex: 1,
        backgroundColor: color.black50
    },
    itemSeparator: {
        height: 2,
        backgroundColor: color.grey200,

    },
    contentContainer: {
        ...commonStyle.pb_3,
        ...commonStyle.pt_3,
        flexGrow: 1,
    },
    emptyComponentContainer: {
        ...commonStyle.flex_1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: widthPercentageToDP(10)
    },
    image: {
        width: width(46),
        height: height(20),
        ...commonStyle.mb_6
    },
    emptylistText1: {
        color: color.white50,
        fontFamily: family.SemiBold,
        ...commonStyle.f_6
    },
    emptylistText2: {
        ...commonStyle.f_4,
        fontFamily: family.Regular,
        color: color.grey600,
        textAlign: 'center',
        ...commonStyle.mt_2
    }
});