import { createHomeStyle } from "@/assets/styles/home.style";
import Header from "@/component/header";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyle = createHomeStyle(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={homestyle.container}>
      <SafeAreaView>
        <Header/>
        <StatusBar barStyle={colors.statusBarStyle}/>
        <Text style={homestyle.safeArea}>sky One</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Button</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

