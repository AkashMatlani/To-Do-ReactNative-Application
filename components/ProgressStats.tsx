
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

            <View style={SettingStyle.statsContainer}>
                {/* Total Todos */}
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

                {/* Completed Todos */}
                <LinearGradient colors={colors.gradients.background}
                    style={[SettingStyle.statCard, { borderLeftColor: colors.success }]}>
                    <View style={SettingStyle.statIconContainer}>

                        <LinearGradient colors={colors.gradients.success}
                            style={SettingStyle.statIcon}>
                            <Ionicons name='checkmark-circle' size={20} color="#fff"></Ionicons>
                        </LinearGradient>
                    </View>

                    <View >
                        <Text style={SettingStyle.statNumber}>{completedTodos}</Text>
                        <Text style={SettingStyle.StatLabel}>Completed</Text>
                    </View>
                </LinearGradient>

                {/* Active Todos */}
                <LinearGradient colors={colors.gradients.background}
                    style={[SettingStyle.statCard, { borderLeftColor: colors.warning }]}>
                    <View style={SettingStyle.statIconContainer}>

                        <LinearGradient colors={colors.gradients.warning}
                            style={SettingStyle.statIcon}>
                            <Ionicons name='time' size={20} color="#fff"></Ionicons>
                        </LinearGradient>
                    </View>

                    <View >
                        <Text style={SettingStyle.statNumber}>{activeTodos}</Text>
                        <Text style={SettingStyle.StatLabel}>Active Todos</Text>
                    </View>
                </LinearGradient>
            </View>
        </LinearGradient>
    );
}

export default ProgressStats;

