import React from "react"
import { Platform, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { commonStyle, color } from "@constants";
import { family } from "@assets";

export const styles = StyleSheet.create({
    writeTodoContainer: {
        backgroundColor: color.grey200,
        ...commonStyle.pb_2,
        ...commonStyle.ph_2
    },
    inputStyle: {
        color: color.white50,
        ...commonStyle.f_5,
        lineHeight: 30,
        fontFamily: family.Medium,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: Platform.OS === 'ios' ? hp(20) : hp(18),
    },
    btnsRowContainer: {
        ...commonStyle.rowStyle,
        ...commonStyle.pt_1,
        width: '100%',
    },
    saveBtnContainer: {
        flex: 1,
        alignSelf: 'baseline',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    flexEnd: {
        justifyContent: 'flex-end'
    }
})