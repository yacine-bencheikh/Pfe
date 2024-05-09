import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import Statistique from '../Statistique';
const Stack = createStackNavigator();




const StatistiqueStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Statistique" component={Statistique} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StatistiqueStack