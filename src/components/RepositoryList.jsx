import React from 'react';
import { FlatList, View, Text } from 'react-native';
import repositories from '../data/repositories';

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            renderItem={({ item: e }) => (
                <View key={e.id}>
                    <Text>{e.fullName}</Text>
                    <Text>{e.description}</Text>
                    <Text>{e.language}</Text>
                    <Text>{e.stargazersCount}</Text>
                    <Text>{e.forksCount}</Text>
                    <Text>{e.reviewCount}</Text>
                    <Text>{e.ratingAverage}</Text>
                </View>
            )}
        >
        </FlatList>
    );
}

export default RepositoryList;
