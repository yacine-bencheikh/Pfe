import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './screens/Stack/HomeStack';
import AuthStack from './screens/Stack/AuthStack';
import { useAuthStore } from './store/store';

export default function App() {
  const isAuth = useAuthStore(state => state.isAuth);
  return (
    <NavigationContainer>

      {isAuth ? <HomeStack/> : <AuthStack/>}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}