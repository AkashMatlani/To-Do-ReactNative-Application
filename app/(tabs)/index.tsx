import { createHomeStyle } from "@/assets/styles/home.style";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyle = createHomeStyle(colors);

  const todos = useQuery(api.todos.getTodos);

  const toggleTodo = useMutation(api.todos.toggleTodos);

  const deleteTodo = useMutation(api.todos.deleteTodo);

  const updateTodo = useMutation(api.todos.updateTodo);

  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");

  //undefined means it is in Loading State from canvex
  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo = async (id: Id<"todos">) => {

    try {
      await toggleTodo({ id })

    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo")
    }
  }

  const handleDeleteTodo = async (id: Id<"todos">) => {

    try {
      Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteTodo({ id }) },
      ])
    } catch (error) {
      console.log("Error deleteing todo", error);
      Alert.alert("Error", "Failed to Delete todo")
    }

  }


  const handleEditTodo = (todo: Todo) => {
    setEditText(todo.text);
    setEditingId(todo._id);
  }
  const handleSaveEdit = async () => {
    if (editingId) {
      try {
        await updateTodo({ id: editingId, text: editText.trim() })
        setEditText("")
        setEditingId(null)
      } catch (error) {
        console.log("Error updating todo", error);
        Alert.alert("Error", "Failed to update todo");
      }
    }
  }

  const handleCancelTodo = () => {
    setEditText("");
    setEditingId(null);
  }

  type Todo = Doc<"todos">

  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editingId === item._id;
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
          {
            isEditing ? (
              <View style={homestyle.editContainer}>
                <TextInput style={homestyle.editInput}
                  value={editText}
                  onChangeText={setEditText}
                  autoFocus
                  multiline
                  placeholder="Edit your todo.."
                  placeholderTextColor={colors.textMuted}
                ></TextInput>

              </View>
            ) : (
              <View style={homestyle.todoTextContainer}>
                <Text style={[
                  homestyle.todoText,
                  item.isCompleted && {
                    textDecorationLine: "line-through",
                    color: colors.textMuted,
                    opacity: 0.6,
                  }
                ]}>  {item.text}</Text>

                <View style={homestyle.todoAction}>
                  <TouchableOpacity
                    onPress={() => { handleEditTodo(item)}}
                    activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.warning}
                      style={homestyle.actionButton}>
                      <Ionicons name="pencil" size={14} color="fff" />
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => { handleDeleteTodo(item._id) }}
                    activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.danger}
                      style={homestyle.actionButton}>
                      <Ionicons name="trash" size={14} color="fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            )}
        </LinearGradient>
      </View>
    );
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
          ListEmptyComponent={<EmptyState />}
        />

      </SafeAreaView>
    </LinearGradient>
  );
}

