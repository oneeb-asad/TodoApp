import React from 'react';
import { StyleSheet, SafeAreaView as RNSafeAreaView } from 'react-native';
import { color } from '@constants';

export const SafeAreaView = ({ children }) => {

    return (
        <RNSafeAreaView style={styles().container}>
            {children}
        </RNSafeAreaView>
    );
};

const styles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.black50
        },
    });
