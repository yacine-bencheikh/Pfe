import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlusButton = () => {
  return (
    <TouchableOpacity className='bg-orange-600 items-center w-14 h-14 justify-center rounded-full'>
      <Text className='font bold text-2xl'>+</Text>
    </TouchableOpacity>
  )
}

export default PlusButton

const styles = StyleSheet.create({})