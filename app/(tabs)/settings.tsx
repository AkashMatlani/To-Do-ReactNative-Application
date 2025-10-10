import { createSettingStyle } from '@/assets/styles/settings.style';
import Preferences from '@/components/Preferences';
import ProgressStats from '@/components/ProgressStats';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const { colors } = useTheme();
  const SettingsStyle = createSettingStyle(colors);

  return (
    <LinearGradient colors={colors.gradients.background}
      style={SettingsStyle.container}>
      <SafeAreaView style={SettingsStyle.safeArea}>
        {/* Header Component */}
        <View style={SettingsStyle.header}>
          <View style={SettingsStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary}
              style={SettingsStyle.iconContainer}>
              <Ionicons name='settings' size={30} color="#ffffff"></Ionicons>
            </LinearGradient>
            <Text style={SettingsStyle.title}>Settings</Text>
          </View>
        </View>

        <ScrollView style={SettingsStyle.scrollView}
          contentContainerStyle={SettingsStyle.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          {/* Preferences */}
          <Preferences/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingScreen