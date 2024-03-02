import {createStackNavigator} from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import LoginScreen from "../LoginScreen";
import FaceIdAuthStack from "./FaceIdAuthStack";
const Stack = createStackNavigator();

import React from 'react'

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
            <Stack.Screen name="FaceIdAuthStack" component={FaceIdAuthStack} options={{headerShown : false}} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    )
}

export default AuthStack