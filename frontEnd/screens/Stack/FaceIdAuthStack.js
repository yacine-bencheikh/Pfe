import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import FaceIdAuthScreen from "../FaceIdAuthScreen";
import PickCredentielScreen from '../PickCredentielScreen';
import TakePicturScreen from '../TakePicturScreen';
const Stack = createStackNavigator();

const FaceIdAuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FaceIdAuthScreen" component={FaceIdAuthScreen}  />
            <Stack.Screen name="PickCredentielScreen" component={PickCredentielScreen}  />
            <Stack.Screen name="TakePicturScreen" component={TakePicturScreen}  />
        </Stack.Navigator>
    )
}

export default FaceIdAuthStack