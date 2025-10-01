import { createHomeStyle } from "@/assets/styles/home.style";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyle = createHomeStyle(colors);

  const todos =useQuery(api.todos.getTodos);

  //undefined means it is in Loading State from canvex
  const isLoading = todos ===undefined
  if(isLoading) return <LoadingSpinner/>

  return (
    <LinearGradient colors={colors.gradients.background} style={homestyle.container}>
      <SafeAreaView>
        <Header/>
        <TodoInput/>
        <StatusBar barStyle={colors.statusBarStyle}/>
        <Text style={homestyle.safeArea}>sky One</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Button</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

