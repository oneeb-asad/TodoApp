import React from "react"
import { StyleSheet } from "react-native"
import { color, commonStyle } from '@constants';
import { family } from '@assets';

export const styles = StyleSheet.create({
    main: {
        ...commonStyle.mt_3
    },
    heading: {
        color: color.white50,
        ...commonStyle.f_12,
        ...commonStyle.pl_6,
        fontFamily: family.Title
    },
    contentContainerStyle: {
        ...commonStyle.pr_6,
        ...commonStyle.mt_3,
    }
})