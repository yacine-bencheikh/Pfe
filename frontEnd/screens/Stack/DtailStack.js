import { createStackNavigator } from "@react-navigation/stack"

import TabNavigator from "../Tabs/TabNavigator"
const Stack = createStackNavigator()
function DetailStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerStyle:{backgroundColor:"#080b12"},headerTintColor: "#b1b2b8"}} />
        </Stack.Navigator>
    )
}

export default DetailStack;