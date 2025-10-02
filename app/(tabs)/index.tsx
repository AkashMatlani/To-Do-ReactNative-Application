import { createHomeStyle } from "@/assets/styles/home.style";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyle = createHomeStyle(colors);

  const todos = useQuery(api.todos.getTodos);

  const toggleTodo = useMutation(api.todos.toggleTodos)

  //undefined means it is in Loading State from canvex
  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo = async (id: Id<"todos">) => {

    try {
      await toggleTodo({id})

    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo")
    }
  }
  type Todo = Doc<"todos">

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homestyle.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface}
          style={homestyle.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>

          <TouchableOpacity
            style={homestyle.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}>


          <LinearGradient
            colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
            style={[homestyle.checkboxInner,
            { borderColor: item.isCompleted ? "transparent" : colors.border, }]
            }
          >
            {item.isCompleted && <Ionicons name="checkmark" size={18} color={"#fff"}></Ionicons>}
          </LinearGradient>
       </TouchableOpacity>

        <View style ={homestyle.todoTextContainer}>
         <Text style ={[
          homestyle.todoText,
          item.isCompleted && {textDecorationLine:"line-through",
            color:colors.textMuted,
            opacity:0.6,}
         ]}>  {item.text}</Text>
        </View>
        </LinearGradient>
      </View>
    )
  }
  return (
    <LinearGradient colors={colors.gradients.background} style={homestyle.container}>
      <SafeAreaView style={homestyle.safeArea}>
        <Header />
        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={homestyle.todoList}
          contentContainerStyle={homestyle.todoListContent}
        />

      </SafeAreaView>
    </LinearGradient>
  );
}

