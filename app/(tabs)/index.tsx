import { createHomeStyle } from "@/assets/styles/home.style";
import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyle = createHomeStyle(colors);
  return (
  <SafeAreaView>
    <Text style={homestyle.container}>Edit app/index.tsx to edit this screen. sky One</Text>
    <TouchableOpacity onPress={toggleDarkMode}>
      <Text>Toggle Button</Text>
    </TouchableOpacity>
  </SafeAreaView>
  );
}

