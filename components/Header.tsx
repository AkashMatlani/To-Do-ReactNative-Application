

import { createHomeStyle } from '@/assets/styles/home.style'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'

const Header = () => {

    const {colors} = useTheme();

    const homeStyle = createHomeStyle(colors);

    const todos = useQuery(api.todos.getTodos);

    const completedCount =todos? todos.filter((todo)=>todo.isCompleted).length:0;
    const totalCount =todos? todos.length: 0;

    const progressPercentage  =totalCount>0 ?(completedCount/totalCount) * 100 : 0;

  return (
    <View style={homeStyle.header}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyle.iconContiner}>
         <Ionicons name='flash-outline' size={28} color="ffffff"/>
        </LinearGradient>
    </View>
  )
}

export default Header;