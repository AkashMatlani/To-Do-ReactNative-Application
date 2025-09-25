

import { createHomeStyle } from '@/assets/styles/home.style'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {

    const {colors} = useTheme();

    const homeStyle = createHomeStyle(colors);

    const todos = useQuery(api.todos.getTodos);

    const completedCount =todos? todos.filter((todo)=>todo.isCompleted).length:0;
    const totalCount =todos? todos.length: 0;

    const progressPercentage  =totalCount>0 ?(completedCount/totalCount) * 100 : 0;

  return (
    <View style={homeStyle.header}>
      <Text>header</Text>
    </View>
  )
}

export default Header;