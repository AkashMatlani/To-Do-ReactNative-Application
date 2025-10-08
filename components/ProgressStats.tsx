
import { createSettingStyle } from '@/assets/styles/settings.style';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';


const ProgressStats = () => {

    const { colors } = useTheme();
    const SettingStyle = createSettingStyle(colors);

    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completedTodos;


    return (
        <LinearGradient colors={colors.gradients.surface} style={SettingStyle.section}>
            <Text style={SettingStyle.sectionTitle}>Progress Stats </Text>

            <LinearGradient colors={colors.gradients.background}
                style={[SettingStyle.statCard, { borderLeftColor: colors.primary }]}>
                    <View style={SettingStyle.statIconContainer}>

                        <LinearGradient colors={colors.gradients.primary}
                        style={SettingStyle.statIcon}>
                            <Ionicons name='list' size={20} color="#fff"></Ionicons>
                        </LinearGradient>
                    </View>

                    <View >
                        <Text style={SettingStyle.statNumber}>{totalTodos}</Text>
                        <Text style={SettingStyle.StatLabel}>Total Todos</Text>
                    </View>
            </LinearGradient>
        </LinearGradient>
    )
}

export default ProgressStats

