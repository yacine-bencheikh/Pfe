import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthStore } from '../store/store';
import { useColor } from 'color-thief-react'
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';

const LoginScreen = ({ navigation }) => {
  const token = useAuthStore(state => state.token);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = useAuthStore(state => state.setAuth);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const handleLogin = async () => {
    setLoading(true);
    console.log(email + '\n' + password);
    await setAuth(email, password);
    setLoading(false)
    console.log('\n' + token);
    if (!!token) {
      navigation.navigate('HomeStack')
    }
  }
  if (loading) {
    return <ActivityIndicator size="large" color="#080b12" className='justify-center items-center' />
  }

  const createIntent = async () => {
    try {
      response = await axios.post('http://192.168.1.7:3100/api/stripe/stripePayment', { amount: 5000 })
      return response
    } catch (error) {
      console.log(error);
    }
  }
  const onCheckOut = async () => {
    try {
        const response = await createIntent();
        if(response.error){
          console.log(error);
          return
        }
        const initResponse = await initPaymentSheet({
          merchantDisplayName: "prisma.int",
          paymentIntentClientSecret: response.data.payment,
        });
        if(initResponse.error){
          console.log(initResponse.error);
          return
        }
        await presentPaymentSheet();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView className='flex-1  justify-center items-center space-y-10 bg-darkBg' >
      <View className='items-center space-y-4'>
        <Image className='rounded-2xl' source={require('../assets/coffe.png')} resizeMode='contain' style={{ width: 100, height: 100 }} />
        <Text className='font-bold text-lg text-textColor' >Somthing</Text>
      </View>
      <Text className='text-textColor'>Sign up to your account</Text>
      <View className='space-y-2 items-center justify-center'>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
          placeholderTextColor='#b1b2b8'
          keyboardType='email-address'
          autoCapitalize='none'
          className='border border-black-300 rounded-md px-5 py-4 w-80 bg-darkInput text-textColor'

        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Password '
          placeholderTextColor='#b1b2b8'
          secureTextEntry
          className='border border-black-300 rounded-md px-5 py-4 w-80 mb-4 bg-darkInput text-textColor'

        />

        <TouchableOpacity onPress={handleLogin} disabled={loading} className='px-28 py-4 rounded-md justify-center items-center w-80 mb-6' style={{ backgroundColor: '#0630F4' }}>
          <Text style={{ color: '#fff' }} className='font-bold text-lg' >LOG IN</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => { navigation.navigate('FaceIdAuthStack') }} >
          <Text className='text-textColor mb-4' >Or Sign in with face identification</Text>
        </TouchableOpacity>
        <View className='flex-row space-x-6'>
          <TouchableOpacity onPress={() => onCheckOut()} style={{ backgroundColor: '#10151b' }} className='p-4 rounded-full' >
            <Image source={require('../assets/google.png')} resizeMode='contain' style={{ width: 30, height: 30, tintColor: '#b1b2b8' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log(token)} style={{ backgroundColor: '#10151b' }} className='p-4 rounded-full' >
            <Image source={require('../assets/facebook.png')} resizeMode='contain' style={{ width: 30, height: 30, tintColor: '#b1b2b8' }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
  textColor: {
    color: '#b1b2b8'
  },
  imageColor: {
    tintColor: '#b1b2b8'
  }
})