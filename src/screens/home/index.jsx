import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from '@core-ui';
import { color, commonStyle } from '@constants';
import { family } from '@assets';
import { AddBtn, Header } from '@components';

export const Home = () => {
    return (
        <SafeAreaView>
            <Header />
            <AddBtn />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    itemSeparator: {
        height: 1,
        backgroundColor: color.grey200,
        ...commonStyle.mv_2
    },

})