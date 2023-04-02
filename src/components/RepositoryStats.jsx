import React from "react";
import { View } from "react-native";

import StyledText from "./StyledText";

const RepositoryStats = item => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyledText fontWeight='bold'>Stars</StyledText>
            <StyledText>{item.stargazersCount}</StyledText>
        </View>
        <View>
            <StyledText fontWeight='bold'>Forks</StyledText>
            <StyledText>{item.forksCount}</StyledText>
        </View>
        <View>
            <StyledText fontWeight='bold'>Review</StyledText>
            <StyledText>{item.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText fontWeight='bold'>Rating</StyledText>
            <StyledText>{item.ratingAverage}</StyledText>
        </View>
    </View>
);

export default RepositoryStats;
