import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Image } from 'react-native';
const Tab = createMaterialBottomTabNavigator();
import Tojrab from './Tojrab';
import Tojrab2 from './Tojrab2'
import Res4 from "./Res4";
import Res3 from './Res3'
import Beta from './Beta'

function TabNavigator() {
    return (
        <Tab.Navigator activeColor="#10151b" inactiveColor="#b1b2b8" barStyle={{ backgroundColor: '#1a1f2b' }} labeled={false} >
            <Tab.Screen 
                name="Tojrab" 
                component={Tojrab} 
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../assets/click.png')} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Tojrab2" 
                component={Tojrab2} 
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../assets/user.png')} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Tojrab3" 
                component={Res3} 
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../assets/true.png')} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Tojrab4" 
                component={Res4} 
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../assets/qr-code.png')} style={{ tintColor: color, width: 24, height: 24 }}  />
                    ),
                }} 
            />
            {/* <Tab.Screen name="Beta" component={Beta} /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator;