import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';

import { Link, TouchableWithoutFeedback } from 'react-router-native';

import theme from '../theme.js';

const AppBarTab = ({ active, children, to }) => {
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab active to='/signin'>Contact</AppBarTab>
                <AppBarTab active to='/signin'>My YT Channel</AppBarTab>
                <AppBarTab active to='/signin'>Sign in</AppBarTab>
                <AppBarTab active to='/signin'>Register</AppBarTab>
            </ScrollView>
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
    },
    scroll: {
        paddingTop: 5,
        paddingBottom: 15,
    },
});


export default AppBar;
