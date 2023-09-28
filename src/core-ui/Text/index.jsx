import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { COLOR } from '@constants';

export const Text = ({ children, style }) => {
    return <RNText style={[styles().textStyle, style]}>{children}</RNText>;
};

const styles = () =>
    StyleSheet.create({
        textStyle: { color: COLOR.darkMode },
    });