import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from "@constants";

export const AddBtn = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.addBtn}
            activeOpacity={0.8} onPress={onPress}>
            <AntDesign name='plus' size={wp(10)} color={color.blac100} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: color.primary50,
        borderRadius: 100,
        width: wp(16),
        height: wp(16),
        position: 'absolute',
        right: wp(6),
        bottom: hp(4),
        alignItems: 'center',
        justifyContent: 'center'
    }
})