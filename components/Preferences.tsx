
import { createSettingStyle } from '@/assets/styles/settings.style';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const Preferences = () => {
    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotificationEnable, setIsNotificationEnable] = useState(true);

    const { isDarkMode, colors, toggleDarkMode } = useTheme();
    const SettingsStyle = createSettingStyle(colors);

    return (
        <LinearGradient colors={colors.gradients.surface} style={SettingsStyle.section}>

            <Text style={SettingsStyle.sectionTitle}>Preferences</Text>

            <View style={SettingsStyle.settingItem}>
                <View style={SettingsStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.primary} style={SettingsStyle.settingIcon}>

                        <Ionicons name='moon' size={18} color="#fff"></Ionicons>
                    </LinearGradient>
                    <Text style={SettingsStyle.settingText}>Dark Mode</Text>

                </View>

                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    thumbColor={"#fff"}
                ></Switch>
            </View>
        </LinearGradient>

    )
}

export default Preferences