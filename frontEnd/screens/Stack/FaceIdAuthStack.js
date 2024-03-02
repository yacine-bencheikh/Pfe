import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import FaceIdAuthScreen from "../FaceIdAuthScreen";
const Stack = createStackNavigator();

const FaceIdAuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FaceIdAuthScreen" component={FaceIdAuthScreen}  />
        </Stack.Navigator>
    )
}

export default FaceIdAuthStack