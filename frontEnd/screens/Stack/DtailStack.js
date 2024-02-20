import { createStackNavigator } from "@react-navigation/stack"

import TabNavigator from "../Tabs/TabNavigator"
const Stack = createStackNavigator()
function DetailStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
            <Stack.Screen name="Tabs" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default DetailStack;