import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AgentCard = ({agent}) => {
    return (
        <View className='space-y-3 mb-3' >  
        <View className='flex-row items-center space-x-3 bg-slate-300 rounded-2xl'>
                    <View className=''>
                    <Image source={require('../assets/coffe.png')} resizeMode='contain' style={{ width: 112, height: 112 }} className='rounded-2xl' />
                    </View>
                    <View className='space-y-1'>
                        <Text numberOfLines={1} ellipsizeMode='tail' className='font-bold text-lg'>{agent.firstName + " " + agent.lastName}</Text>
                        <Text className='text-gray-400'>{agent.mobile}</Text>
                        <Text className='text-gray-400'>{agent.role}</Text>
                    </View>
                    <View className='justify-end items-end h-28' style={{flex:1}} >
                        <TouchableOpacity className='p-3  bg-orange-500 w-14 items-center rounded-tl-2xl rounded-br-2xl'><Text>X</Text></TouchableOpacity>
                    </View>
                </View>
        
        </View>
    )
}

export default AgentCard

const styles = StyleSheet.create({})