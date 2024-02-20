import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
const Tab = createMaterialBottomTabNavigator()
import Tojrab from './Tojrab';
import Tojrab2 from './Tojrab2'
import Res4 from "./Res4";
import Res3 from './Res3'
import Beta from './Beta'
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tojrab" component={Tojrab} />
            <Tab.Screen name="Tojrab2" component={Tojrab2} />
            <Tab.Screen name="Tojrab3" component={Res3} />
            <Tab.Screen name="Tojrab4" component={Res4} />
            <Tab.Screen name="Beta" component={Beta} />
        </Tab.Navigator>
    )
}
export default TabNavigator;