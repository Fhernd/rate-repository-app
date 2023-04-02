import React from "react";
import { View } from "react-native";

import StyledText from "./StyledText";

const parseThousands = (value) => {
    return value > 999 ? `${(value / 1000).toFixed(1)}k` : value;
};

const RepositoryStats = item => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyledText align='center' fontWeight='bold'>Stars</StyledText>
            <StyledText align='center'>{parseThousands(item.stargazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Forks</StyledText>
            <StyledText align='center'>{parseThousands(item.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Review</StyledText>
            <StyledText align='center'>{item.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Rating</StyledText>
            <StyledText align='center'>{item.ratingAverage}</StyledText>
        </View>
    </View>
);

export default RepositoryStats;
