import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import FaceIdAuthScreen from "../FaceIdAuthScreen";
import PickCredentielScreen from '../PickCredentielScreen';
import TakePicturScreen from '../TakePicturScreen';
import SucessPage from '../SucessPage';
import FaildPage from '../FaildPage';
const Stack = createStackNavigator();

const FaceIdAuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FaceIdAuthScreen" component={FaceIdAuthScreen}  />
            <Stack.Screen name="PickCredentielScreen" component={PickCredentielScreen}  />
            <Stack.Screen name="TakePicturScreen" component={TakePicturScreen}  />
            <Stack.Screen name="SucessPage" component={SucessPage}  />
            <Stack.Screen name="FaildPage" component={FaildPage}  />
        </Stack.Navigator>
    )
}

export default FaceIdAuthStack