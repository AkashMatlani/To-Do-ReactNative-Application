import { Tabs } from 'expo-router'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarInactiveTintColor:'red',
            tabBarActiveTintColor:'green',
            tabBarStyle:{
                backgroundColor: '#1e293b',
                borderTopWidth:1,
                borderTopColor: "Yellow",
                height:90,
                paddingBottom : 30,
                paddingTop: 10
            },
            headerShown:false
        }}>
            <Tabs.Screen

                name='index'
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='flash-outline' size={size}color={color}>
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