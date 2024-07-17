import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FaildPage = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-600" >
      <View>
        <Text className="text-2xl text-center " >Your ID card dosen't match the selfies provided</Text>
      </View>
    </SafeAreaView>
  )
}

export default FaildPage

const styles = StyleSheet.create({})