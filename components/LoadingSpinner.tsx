

import { createHomeStyle } from '@/assets/styles/home.style';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const LoadingSpinner = () => {
    const { colors } = useTheme();
    const homestyles = createHomeStyle(colors);
    return (
        <LinearGradient
            colors={colors.gradients.background}>
            <View style={homestyles.loadingContainer}>
                <ActivityIndicator size={'large'} color={colors.primary} />
                <Text style={homestyles.loadingText}>Loading Yout todos..</Text>
            </View>
        </LinearGradient>
    )
}

export default LoadingSpinner