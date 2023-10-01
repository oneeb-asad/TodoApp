import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { commonStyle, color } from "@constants";
import { family } from "@assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bg,
        ...commonStyle.ph_4
    },
    imageContainer: {
        ...commonStyle.flex_1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textContainer: {
        ...commonStyle.flex_1,
        justifyContent: 'space-around'
    },
    heading: {
        color: color.primary50,
        fontFamily: family.BebasNeue,
        textAlign: 'center',
        ...commonStyle.f_12,
        ...commonStyle.mh_8,
    },
    subHeading: {
        ...commonStyle.f_4,
        color: color.white50,
        marginHorizontal: wp(8),
        textAlign: 'center',
        ...commonStyle.mt_2,
        fontFamily: family.Regular
    },
    img: {
        width: '70%',
        height: '70%'
    }
})