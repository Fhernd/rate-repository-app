import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats';
import StyledText from './StyledText';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>FullName: {item.fullName}</StyledText>
        <StyledText>Description: {item.description}</StyledText>
        <StyledText>Language: {item.language}</StyledText>
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
    }
});

export default RepositoryItem;
