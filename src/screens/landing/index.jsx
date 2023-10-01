import React from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { routes } from "@constants";
import { images } from "@assets";
import { SaveButton } from "@components";
import { styles } from "./styles";

export const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
                <Image source={images.landing} style={styles.img} resizeMode='cover' />
            </View>
            {/* Text and Button Container */}
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.heading}>PLAN WITHIN {'\n'}2 STEPS</Text>
                    <Text style={styles.subHeading}>Spend less time planning and more time doing</Text>
                </View>
                {/* Button to Navigate to Home Screen */}
                <SaveButton
                    title={'GET STARTED'}
                    onPress={() => navigation.navigate(routes.HOME)}
                />
            </View>
        </View>
    )
}