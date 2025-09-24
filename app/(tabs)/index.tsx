import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {

  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={style.container}
    >
      <Text style={style.content}>Edit app/index.tsx to edit this screen. sky One</Text>
      <Text style={style.content}>hi</Text>

      <TouchableOpacity onPress={toggleDarkMode}>

        <Text>Toggle Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    fontSize: 52,
  }
})
