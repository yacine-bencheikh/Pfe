import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './screens/Stack/HomeStack';
import AuthStack from './screens/Stack/AuthStack';
import { useAuthStore } from './store/store';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const token = useAuthStore(state => state.token);
  return (
    <PaperProvider>
    <NavigationContainer>

      {!!token._j ? <HomeStack/> : <AuthStack/>}
      <StatusBar style="auto" />
    </NavigationContainer>
    </PaperProvider>
  );
}