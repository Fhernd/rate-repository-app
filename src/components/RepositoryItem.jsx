import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats';
import theme from '../theme.js';
import RepositoryItemHeader from './RepositoryItemHeader';

const RepositoryItem = (item) => (
    <View key={item.id} style={styles.container}>
        <RepositoryItemHeader {...item} />
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
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
});

export default RepositoryItem;
