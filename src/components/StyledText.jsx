import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
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
    },
    textAlignCenter: {
        textAlign: "center",
    }
});

export default function StyledText({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subHeading,
        fontWeight === "bold" && styles.bold,
        style
    ];

    return (
        <Text
            style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
}
