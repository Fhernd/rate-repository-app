import React from "react";
import { View } from "react-native";

import StyledText from "./StyledText";

const RepositoryStats = item => (
    <View>
        <StyledText>Stars: {item.stargazersCount}</StyledText>
        <StyledText>Forks: {item.forksCount}</StyledText>
        <StyledText>Review: {item.reviewCount}</StyledText>
        <StyledText>Rating: {item.ratingAverage}</StyledText>
    </View>
);

export default RepositoryStats;
