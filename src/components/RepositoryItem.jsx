import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
    return (
        <View key={item.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>ID: {item.id}</Text>
            <Text>FullName: {item.fullName}</Text>
            <Text>Descripcpion: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Review: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
}
