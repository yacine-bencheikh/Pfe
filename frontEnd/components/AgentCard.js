import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAgentStore } from '../store/store'

const AgentCard = ({ agent, setModalVisible, setUpdateModalVisible }) => {
    const setCurrentAgent = useAgentStore(state => state.setCurrentAgent);

    return (
        <View className='space-y-3 mb-3' >
            <TouchableOpacity onPress={() => { setCurrentAgent(agent); setUpdateModalVisible(true) }} className='flex-row items-center space-x-3 bg-darkInput rounded-2xl'>
                <View className=''>
                    <Image source={require('../assets/coffe.png')} resizeMode='contain' style={{ width: 112, height: 112 }} className='rounded-2xl' />
                </View>
                <View className='space-y-1'>
                    <Text numberOfLines={1} ellipsizeMode='tail' className='font-bold text-lg text-textColor'>{agent.firstName + " " + agent.lastName}</Text>
                    <Text className='text-textColor'>{agent.mobile}</Text>
                    <Text className='text-textColor'>{agent.role}</Text>
                </View>
                <View className='justify-end items-end h-28' style={{ flex: 1 }} >
                    <TouchableOpacity onPress={() => { setCurrentAgent(agent); setModalVisible(true) }} className='p-3  bg-blueButton w-14 items-center rounded-tl-2xl rounded-br-2xl'><Text className='text-textColor'>X</Text></TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default AgentCard

const styles = StyleSheet.create({})