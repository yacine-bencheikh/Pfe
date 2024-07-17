import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

const SucessPage = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-green-600' >
      <View >
        <Text className="text-2xl text-center "> you are a valide client press the button below</Text>
      </View>
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      </View>
    </SafeAreaView>
  )
}

export default SucessPage

const styles = StyleSheet.create({})