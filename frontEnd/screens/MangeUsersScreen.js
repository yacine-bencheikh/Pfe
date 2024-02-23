import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlusButton from '../components/PlusButton'
import AgentCard from '../components/AgentCard'
import { useAgentStore } from '../store/store'
import { useAuthStore } from '../store/store'
const MangeUsersScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            <PlusButton setModalVisible ={setModalVisible} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ marginTop: 50, padding: 20 }}>
                    <Text>Create a new user</Text>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    
                </View>
            </Modal>
        </View>
    )
}

export default MangeUsersScreen

const styles = StyleSheet.create({})

