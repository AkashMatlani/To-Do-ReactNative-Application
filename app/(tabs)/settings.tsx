import { createHomeStyle } from '@/assets/styles/home.style';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const SettingScreen = () => {

  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const SettingsStyle = createHomeStyle(colors);

  return (
    <LinearGradient colors={colors.gradients.background} 
    style={SettingsStyle.container}>
      <SafeAreaView style={SettingsStyle.safeArea}>
        {/* Header Component */}
        <View style={SettingsStyle.header}>
          <View style={SettingsStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary}
            style ={SettingsStyle.iconContiner}>
              <Ionicons name='settings' size={30} color="#ffffff"></Ionicons>
            </LinearGradient>
            <Text style={SettingsStyle.title}>Settings</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingScreen