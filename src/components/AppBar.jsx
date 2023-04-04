import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';

import { Link, TouchableWithoutFeedback } from 'react-router-native';

import theme from '../theme.js';

const AppBarTab = ({ active, children, to }) => {
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active to='/'>Repositories</AppBarTab>
            <AppBarTab active to='/signin'>Sign in</AppBarTab>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    }
});


export default AppBar;
