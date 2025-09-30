
import { createHomeStyle } from '@/assets/styles/home.style';
import useTheme from '@/hooks/useTheme';
import React, { useState } from 'react';
import { View } from 'react-native';

const TodoInput = () => {

    const { colors } = useTheme();
    const homestyles = createHomeStyle(colors);

    const [newTodo, setNewTodo] = useState("");


    return (
        <View style={homestyles.inputSetion}>
            <View style={homestyles.inputWrapper}>
            </View>

        </View>
    )
}

export default TodoInput