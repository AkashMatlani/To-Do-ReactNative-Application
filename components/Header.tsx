
import { createHomeStyle } from '@/assets/styles/home.style'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {

  const { colors } = useTheme();

  const homeStyle = createHomeStyle(colors);

  const todos = useQuery(api.todos.getTodos);

  const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const totalCount = todos ? todos.length : 0;

  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <View style={homeStyle.header}>
      <View style={homeStyle.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyle.iconContiner}>
          <Ionicons name='flash-outline' size={28} color="ffffff" />
        </LinearGradient>

        <View style={homeStyle.titleTextContiner}>
          <Text style={homeStyle.title}> Today&apos;s Task 👀</Text>
          <Text style={homeStyle.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>

      <View style={homeStyle.progressContainer}>
        <View style={homeStyle.progressBarContainer}>
          <View style={homeStyle.progrssBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyle.progrssFill, { width: `${progressPercentage}%` }]}
            ></LinearGradient>
          </View>
          <Text style={homeStyle.progressText}>{Math.round(progressPercentage)}%</Text>
        </View>
      </View>

    </View>
  )
}

export default Header;