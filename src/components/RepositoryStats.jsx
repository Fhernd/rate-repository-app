import React from "react";
import { View } from "react-native";

import StyledText from "./StyledText";

const parseThousands = (value) => {
    return value > 999 ? `${(value / 1000).toFixed(1)}k` : value;
};

const RepositoryStats = item => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyledText align='center'>Stars</StyledText>
            <StyledText align='center' fontWeight='bold'>{parseThousands(item.stargazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center'>Forks</StyledText>
            <StyledText align='center' fontWeight='bold'>{parseThousands(item.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center'>Review</StyledText>
            <StyledText align='center' fontWeight='bold'>{item.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText align='center'>Rating</StyledText>
            <StyledText align='center' fontWeight='bold'>{item.ratingAverage}</StyledText>
        </View>
    </View>
);

export default RepositoryStats;
