import React from 'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { commonStyle, color } from '@constants';
import { family } from '@assets'

export const styles = StyleSheet.create({
    cardContainer: {
        ...commonStyle.flex_1,
        ...commonStyle.rowStyle,
        ...commonStyle.ph_4,
        backgroundColor: color.black50,
        ...commonStyle.pv_1,
        ...commonStyle.pb_2,
    },
    todoTitle: {
        color: color.white50,
        ...commonStyle.f_6,
        fontFamily: family.SemiBold
    },
    todoDescription: {
        color: color.white50,
        ...commonStyle.f_4,
    },
    timeContainer: {
        borderWidth: 1,
        borderColor: color.grey50,
        ...commonStyle.p_2,
        ...commonStyle.ph_4,
        ...commonStyle.mt_2,
        borderRadius: 100,
        alignSelf: 'baseline'
    },
    timeText: {
        color: color.grey500,
        ...commonStyle.f_4,
        fontFamily: family.Medium
    },
    row: { ...commonStyle.rowJustify }
})