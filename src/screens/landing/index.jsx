import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { commonStyle, color, routes } from "@constants";
import { family, images } from "@assets";
import { SaveButton } from "@components";

export const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={images.landing} style={{ width: '70%', height: '70%' }} resizeMode='cover' />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.heading}>PLAN WITHIN {'\n'}2 STEPS</Text>
                    <Text style={styles.subHeading}>Spend less time planning and more time doing</Text>
                </View>
                <SaveButton
                    title={'GET STARTED'}
                    onPress={() => navigation.navigate(routes.HOME)}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
        fontFamily: family.Title,
        textAlign: 'center',
        ...commonStyle.f_8,
        ...commonStyle.mh_8,
    },
    subHeading: {
        ...commonStyle.f_4,
        color: color.white50,
        marginHorizontal: wp(8),
        textAlign: 'center',
        ...commonStyle.mt_2,
        fontFamily: family.Regular
    }
})