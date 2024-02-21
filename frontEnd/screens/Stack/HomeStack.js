import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen";
import DetailStack from "./DtailStack";
import MangeUsersStack from "./MangeUsersStack";
const Stack = createStackNavigator()
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="DetailStack" component={DetailStack} options={{ headerShown: false }} />
            <Stack.Screen name="MangeUsersStack" component={MangeUsersStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack;