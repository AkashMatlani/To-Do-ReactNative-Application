import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";


export const createSettingStyle = (colors: ColorScheme) => {
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
        },
        iconContainer: {
            width: 56,
            height: 56,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16,
        },
        title: {
            fontSize: 32,
            fontWeight: "700",
            letterSpacing: -1,
            color: colors.text,
        },
        scrollView: {
            flex: 1
        },
        content: {
            paddingHorizontal: 20,
            gap: 20,
            paddingBottom: 120
        },
        section: {
            borderRadius: 20,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 8,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 20,
            letterSpacing: -0.5,
            color: colors.text
        },
        statCard: {
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            borderRadius: 16,
            borderLeftWidth: 4,
        },
        statsContainer: {
            gap: 16,
        },
        statIconContainer: {
            marginRight: 16,
        },
        statIcon: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center"
        },
        statNumber: {
            fontSize: 28,
            fontWeight: "800",
            marginTop: 2,
            color: colors.textMuted,
        },
        StatLabel: {
            fontSize: 14,
            fontWeight: "600",
            marginTop: 2,
            color: colors.textMuted,
        },
        settingItem:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingVertical:20,
            borderBottomWidth:1,
            borderBottomColor:colors.border
        },

        settingLeft:{
            flexDirection:"row",
            alignItems:"center",
            flex:1,
        },
        settingIcon:{
            width:36,
            height:36,
            borderRadius:8,
            justifyContent:"center",
            alignItems:"center",
            marginRight:16,
        },
        settingText:{
            fontSize:17,
            fontWeight:"600",
            color:colors.text,
        }
    });
    return style;
};