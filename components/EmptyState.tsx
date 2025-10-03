
import { createHomeStyle } from '@/assets/styles/home.style';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const EmptyState = () => {

    const { colors } = useTheme();

    const homestyle = createHomeStyle(colors);

    return (
        <View style={homestyle.emptyContainer}>
            <LinearGradient colors={colors.gradients.empty}
                style={homestyle.emptyIconContainer}>
                <Ionicons name='clipboard-outline' size={60} color={colors.textMuted} />
            </LinearGradient>

            <Text style={homestyle.emptyText}>No tods Yet</Text>
            <Text style={homestyle.emptySubText}>Add your first todo above to get started</Text>

        </View>
    );
};

export default EmptyState