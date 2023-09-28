import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color, commonStyle } from '@constants';
import { family } from '@assets';
import { styles } from './styles'

export const TopTab = ({ title, onPress, selectedTab, showImage = false }) => {
    return (
        <TouchableOpacity
            style={[styles.container,
            (selectedTab === title && !showImage) && { backgroundColor: color.primary50 },
            showImage && { borderWidth: 0, ...commonStyle.ph_2 }
            ]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {
                showImage ?
                    <AntDesign name={'star'} size={wp(8)} color={selectedTab === title ? color.primary50 : color.grey400} />
                    :
                    <Text style={[styles.heading,
                    selectedTab === title && { color: color.blac100, fontFamily: family.SemiBold }
                    ]}>{title}</Text>
            }
        </TouchableOpacity >
    )
}
