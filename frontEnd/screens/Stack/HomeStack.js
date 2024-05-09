import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen";
import DetailStack from "./DtailStack";
import MangeUsersStack from "./MangeUsersStack";
import UploadFileStack from "./UploadFileStack";
import StatistiqueStack from "./StatistiqueStack";
const Stack = createStackNavigator()
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="DetailStack" component={DetailStack} options={{ headerShown: false }} />
            <Stack.Screen name="MangeUsersStack" component={MangeUsersStack} options={{ headerShown: false }} />
            <Stack.Screen name="UploadFileStack" component={UploadFileStack} options={{ headerShown: false }} />
            <Stack.Screen name="StatistiqueStack" component={StatistiqueStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack;