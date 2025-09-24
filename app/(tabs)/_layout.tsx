import { Tabs } from 'expo-router'
import React from 'react'

import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    const { colors } = useTheme();
    return (
        <Tabs screenOptions={{
            tabBarInactiveTintColor: colors.primary,
            tabBarActiveTintColor: colors.textMuted,
            tabBarStyle: {
                backgroundColor: colors.surface,
                borderTopWidth: 1,
                borderTopColor: colors.border,
                height: 90,
                paddingBottom: 30,
                paddingTop: 10
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='flash-outline' size={size} color={color}>
                        </Ionicons>)
                }}>

            </Tabs.Screen>


            <Tabs.Screen
                name='settings'
                options={{
                    title: "Settings",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='settings' size={size} color={color}>
                        </Ionicons>)
                }}>

            </Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout