import React from 'react'
import { StyleSheet } from 'react-native'
import { color, commonStyle } from '@constants'
import { family } from '@assets'

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: color.primary50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...commonStyle.ml_4,
        ...commonStyle.ph_6,
        ...commonStyle.pv_1
    },
    heading: {
        color: color.white50,
        ...commonStyle.f_4,
        fontFamily: family.Medium
    }
})