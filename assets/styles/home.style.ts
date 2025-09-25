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
        header:{
            paddingHorizontal: 24,
            paddingVertical: 32,
            paddingBottom: 24,
        },

        iconContiner:{
            width:56,
            height:56,
            borderRadius: 16,
            justifyContent:"center",
            alignItems:"center",
            marginRight: 16
        },

    });
    return style;
}