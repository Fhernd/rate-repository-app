import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <Text style={styles.strong}>ID: {item.id}</Text>
        <Text>FullName: {item.fullName}</Text>
        <Text>Descripcpion: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Review: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
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
