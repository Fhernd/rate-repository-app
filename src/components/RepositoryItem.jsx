import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <StyledText>FullName: {item.fullName}</StyledText>
        <StyledText>Descripcpion: {item.description}</StyledText>
        <StyledText>Language: {item.language}</StyledText>
        <StyledText>Stars: {item.stargazersCount}</StyledText>
        <StyledText>Forks: {item.forksCount}</StyledText>
        <StyledText>Review: {item.reviewCount}</StyledText>
        <StyledText>Rating: {item.ratingAverage}</StyledText>
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
