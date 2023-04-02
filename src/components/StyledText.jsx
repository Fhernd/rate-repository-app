import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.fontWeights.bold,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subHeading: {
        fontSize: theme.fontSizes.subheading,
    }
});

export default function StyledText({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subHeading,
        fontWeight === "bold" && styles.bold,
    ];

    return (
        <Text
            style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
}
