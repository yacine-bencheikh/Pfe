import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import React from 'react'
import MangeUsersScreen from '../MangeUsersScreen';
const Stack = createStackNavigator();
const MangeUsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MangeUsersScreen" component={MangeUsersScreen}  />
    </Stack.Navigator>
  )
}

export default MangeUsersStack