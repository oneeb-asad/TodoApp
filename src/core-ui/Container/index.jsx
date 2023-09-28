import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

export const Container = ({ children, scroll, style }) => {
    return scroll ? <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, style]}>{children}</ScrollView> :
        <View style={[styles.container, style]}>{children}</View>
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '5%',
        marginTop: 10,
        marginBottom: 10,
    },
});