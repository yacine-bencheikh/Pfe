import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import HomeStack from './screens/Stack/HomeStack';
import AuthStack from './screens/Stack/AuthStack';
import { useAuthStore } from './store/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { StripeProvider } from '@stripe/stripe-react-native';
import { publishable_key } from "@env"
export default function App() {
  const token = useAuthStore(state => state.token);
  return (
    <PaperProvider>
      <StripeProvider publishableKey={publishable_key} >
        <NavigationContainer>
          {!!token._j ? <HomeStack /> : <AuthStack />}
          <StatusBar style="auto" />
        </NavigationContainer>
      </StripeProvider>
    </PaperProvider>
  );
}