import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlusButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress = {()=>{navigation.navigate('CreateUserScreen')}}  className='bg-blueButton items-center w-14 h-14 justify-center rounded-full'>
      <Text className='font bold text-2xl text-textColor'>+</Text>
    </TouchableOpacity>
  )
}

export default PlusButton

const styles = StyleSheet.create({})