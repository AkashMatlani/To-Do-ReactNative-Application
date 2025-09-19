import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.content}>Edit app/index.tsx to edit this screen. sky One</Text>
      <Text style={style.content}>hi</Text>
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  content: {
    fontSize: 52,
    color: "white",
    fontWeight: "bold",
    backfaceVisibility: "hidden"
  }
})
