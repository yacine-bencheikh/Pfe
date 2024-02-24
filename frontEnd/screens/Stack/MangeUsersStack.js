import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import React from 'react'
import MangeUsersScreen from '../MangeUsersScreen';
import CreateUserScreen from '../CreateUserScreen';
const Stack = createStackNavigator();
const MangeUsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MangeUsersScreen" component={MangeUsersScreen}  />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}  />
    </Stack.Navigator>
  )
}

export default MangeUsersStack