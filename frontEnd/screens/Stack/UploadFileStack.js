import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import UploadFileScreen from "../UploadFileScreen"
const Stack = createStackNavigator()

const UploadFileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UploadFileScreen" component={UploadFileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}

export default UploadFileStack

