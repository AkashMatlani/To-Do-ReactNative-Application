import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyle = (colors: ColorScheme) => {
    const style = StyleSheet.create({
        container: {
            flex: 1,
        },
        safeArea: {
            flex: 1,
        },
        header: {
            paddingHorizontal: 24,
            paddingVertical: 32,
            paddingBottom: 24,
        },
        titleContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20
        },
        iconContiner: {
            width: 56,
            height: 56,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16
        },
        titleTextContiner: {
            flex: 1,
        },
        title: {
            fontSize: 32,
            fontWeight: "700",
            letterSpacing: -1,
            marginBottom: 4,
            color: colors.text
        },
        subtitle: {
            fontSize: 17,
            fontWeight: "500",
            color: colors.textMuted
        },
        progressContainer: {
            marginTop: 8,
        },
        progressBarContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
        },
        progrssBar: {
            flex: 1,
            height: 12,
            borderRadius: 6,
            overflow: "hidden",
            backgroundColor: colors.border,
        },
        progrssFill: {
            height: "100%",
            borderRadius: 6,
        },
        progressText: {
            fontSize: 16,
            fontWeight: "700",
            minWidth: 40,
            textAlign: "right",
            color: colors.success,
        },
        inputSetion: {
            paddingHorizontal: 24,
            paddingBottom: 12,
        },
        inputWrapper: {
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 16
        },

        input: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 16,
            fontSize: 17,
            maxHeight: 120,
            fontWeight: "500",
            backgroundColor: colors.backgrounds.input,
            borderColor: colors.border,
            color: colors.text
        },
        inputFocused: {
            borderColor: colors.primary
        },

        addButton: {
            width: 56,
            height: 56,
            borderRadius: 28,
            justifyContent: "center",
            alignItems: "center"
        },
        addButtonDisabled: {
            opacity: 0.5
        }
    });
    return style;
}