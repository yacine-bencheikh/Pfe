import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthStore } from '../store/store';

const LoginScreen = ({navigation}) => {
  
  const token = useAuthStore(state => state.token);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = useAuthStore(state => state.setAuth);
  const handleLogin = async () => {
    setLoading(true);
    console.log(email + '\n' + password);
    await setAuth(email, password);
    setLoading(false)
    console.log('\n'+ token);
    if(!!token){
      navigation.navigate('HomeStack')
    }
  }
  return (
    <SafeAreaView className='flex-1  justify-center items-center space-y-10' style={{ backgroundColor: "#080b12" }}>
      <View className='items-center space-y-4'>
        <Image className='rounded-2xl' source={require('../assets/coffe.png')} resizeMode='contain' style={{ width: 100, height: 100 }} />
        <Text style={styles.textColor} className='font-bold text-lg' >Somthing</Text>
      </View>
      <Text style={styles.textColor}>Sign up to your account</Text>
      <View className='space-y-2 items-center justify-center'>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
          placeholderTextColor='#b1b2b8'
          keyboardType='email-address'
          autoCapitalize='none'
          className='border border-black-300 rounded-md px-5 py-4 w-80'
          style={{ backgroundColor: '#10151b', color:'#b1b2b8' }}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Password '
          placeholderTextColor='#b1b2b8'
          secureTextEntry
          className='border border-black-300 rounded-md px-5 py-4 w-80 mb-4'
          style={{ backgroundColor: '#10151b', color:'#b1b2b8' }}
        />

      <TouchableOpacity  onPress={handleLogin} disabled={loading} className='px-28 py-4 rounded-md justify-center items-center w-80 mb-6' style={{backgroundColor:'#0630F4'}}>
        <Text style={{color:'#fff'}} className='font-bold text-lg' >LOG IN</Text>
      </TouchableOpacity >
      <Text style={styles.textColor} className='mb-4'>Or Sign in with social</Text>
      <View className='flex-row space-x-6'>
        <TouchableOpacity onPress={()=>console.log()} style={{backgroundColor: '#10151b'}} className='p-4 rounded-full' >
          <Image source={require('../assets/google.png')} resizeMode='contain' style={{ width: 30, height: 30,tintColor:'#b1b2b8' }} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>console.log(token)} style={{backgroundColor: '#10151b'}} className='p-4 rounded-full' >
          <Image source={require('../assets/facebook.png')} resizeMode='contain' style={{ width: 30, height: 30 ,tintColor:'#b1b2b8' }}  />
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