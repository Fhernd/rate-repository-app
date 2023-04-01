import React from 'react';
import { FlatList, View, Text } from 'react-native';
import repositories from '../data/repositories';

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: e }) => (
                <View key={e.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{fontWeight: 'bold', marginBottom: 5}}>ID: {e.id}</Text>
                    <Text>FullName: {e.fullName}</Text>
                    <Text>Descripcpion: {e.description}</Text>
                    <Text>Language: {e.language}</Text>
                    <Text>Stars: {e.stargazersCount}</Text>
                    <Text>Forks: {e.forksCount}</Text>
                    <Text>Review: {e.reviewCount}</Text>
                    <Text>Rating: {e.ratingAverage}</Text>
                </View>
            )}
        >
        </FlatList>
    );
}

export default RepositoryList;
