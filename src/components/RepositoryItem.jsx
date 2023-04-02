import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats';
import StyledText from './StyledText';
import theme from '../theme.js';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>{item.fullName}</StyledText>
        <StyledText>{item.description}</StyledText>
        <StyledText style={styles.language}>{item.language}</StyledText>
        <RepositoryStats {...item} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
    },
});

export default RepositoryItem;
