import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlusButton from '../components/PlusButton'
import AgentCard from '../components/AgentCard'
import { useAgentStore } from '../store/store'
import { useAuthStore } from '../store/store'
const MangeUsersScreen = ({navigation}) => {
    const token = useAuthStore(state => state.token);
    const setAgents = useAgentStore(state => state.setAgents);
    const agents = useAgentStore(state => state.agents);
    useEffect(() => {setAgents(token._j)}, [token])
    return (
        <View className=' m-4 my-2'>
            <Text className='font-bold text-xl mb-4'>Your Users</Text>
            <ScrollView  style={{maxHeight:600, marginBottom:12}}>
                {agents.map((agent, index) => {
                    return <AgentCard key={index} agent={agent} />
                })}
                
            </ScrollView>
            <PlusButton navigation={navigation} />
        </View>
    )
}

export default MangeUsersScreen

const styles = StyleSheet.create({})

