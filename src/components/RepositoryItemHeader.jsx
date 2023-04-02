import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme.js";

const RepositoryItemHeader = ({ fullName, description, language, ownerAvatarUrl }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
            <StyledText>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    );
}

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

export default RepositoryItemHeader;
