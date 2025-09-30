
import { createHomeStyle } from '@/assets/styles/home.style';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const TodoInput = () => {

    const { colors } = useTheme();
    const homestyles = createHomeStyle(colors);

    const [newTodo, setNewTodo] = useState("");

    const addTodos = useMutation(api.todos.addTodos);



    const handleAddToDo = async () => {

        if (newTodo.trim()) {
            try {

                await addTodos({ text: newTodo.trim() });
                setNewTodo("");
            } catch (error) {
                console.log("Error added a todo", error)
                Alert.alert("Error", "Error added a todo")

            }
        }
    }


    return (
        <View style={homestyles.inputSetion}>
            <View style={homestyles.inputWrapper}>

                <TextInput
                    style={homestyles.input}
                    placeholder='What needs to be done?'
                    value={newTodo}
                    onChangeText={setNewTodo}
                    onSubmitEditing={handleAddToDo}
                    placeholderTextColor={colors.textMuted}
                ></TextInput>

                <TouchableOpacity onPress={handleAddToDo}
                    activeOpacity={0.8}
                    disabled={!newTodo.trim()}
                >

                    <LinearGradient colors={newTodo.trim() ?
                        colors.gradients.primary :
                        colors.gradients.muted}
                        style={[homestyles.addButton, !newTodo.trim() && homestyles.addButtonDisabled]}
                    >
                        <Ionicons
                            name='add'
                            size={24}
                            color="#ffffff"
                        ></Ionicons>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default TodoInput