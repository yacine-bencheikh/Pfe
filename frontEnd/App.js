import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './screens/Stack/HomeStack';
import AuthStack from './screens/Stack/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}