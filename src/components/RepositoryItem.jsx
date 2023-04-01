import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <StyledText big bold>ID: {item.id}</StyledText>
        <StyledText blue>FullName: {item.fullName}</StyledText>
        <StyledText bold>Descripcpion: {item.description}</StyledText>
        <StyledText blue>Language: {item.language}</StyledText>
        <StyledText small>Stars: {item.stargazersCount}</StyledText>
        <StyledText small>Forks: {item.forksCount}</StyledText>
        <StyledText small>Review: {item.reviewCount}</StyledText>
        <StyledText small>Rating: {item.ratingAverage}</StyledText>
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
    }
});

export default RepositoryItem;
