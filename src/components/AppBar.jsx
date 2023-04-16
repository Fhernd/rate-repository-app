import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';

import { Link, TouchableWithoutFeedback, useLocation } from 'react-router-native';

import theme from '../theme.js';

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();

    const isActive = pathname === to;

    const textStyles = [
        styles.text,
        isActive && styles.active,
    ]
    
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign in</AppBarTab>
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
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    scroll: {
        paddingTop: 5,
        paddingBottom: 15,
    },
    active: {
        color: theme.appBar.textPrimary,
    },
});


export default AppBar;
