import React from 'react';
import { View, Text } from 'react-native';
import repositories from '../data/repositories';

const RepositoryList = () => {
    return (
        <View>
            {repositories.map((e) => (
                <View key={e.id}>
                    <Text>{e.fullName}</Text>
                    <Text>{e.description}</Text>
                    <Text>{e.language}</Text>
                    <Text>{e.stargazersCount}</Text>
                    <Text>{e.forksCount}</Text>
                    <Text>{e.reviewCount}</Text>
                    <Text>{e.ratingAverage}</Text>
                </View>
            ))
        }
        </View>
    );
}
