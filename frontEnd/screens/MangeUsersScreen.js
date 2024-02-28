import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, View, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlusButton from '../components/PlusButton'
import AgentCard from '../components/AgentCard'
import { useAgentStore } from '../store/store'
import { useAuthStore } from '../store/store'
import DeleteModal from '../components/DeleteModal'
import UpdateModal from '../components/UpdateModal'
const MangeUsersScreen = ({ navigation }) => {
    const token = useAuthStore(state => state.token._j) || useAuthStore(state => state.token);
    const setAgents = useAgentStore(state => state.setAgents);
    const agents = useAgentStore(state => state.agents);
    useEffect(() => { setAgents(token) }, [token])
    const [modalVisible, setModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    return (
        <View className=' m-4 my-2'  >
            <Text className='font-bold text-xl mb-4'>Your Users</Text>
            <ScrollView style={{ maxHeight: 600, marginBottom: 12 }}>
                {agents.map((agent, index) => {
                    return <AgentCard key={index} agent={agent} setModalVisible={setModalVisible} setUpdateModalVisible={setUpdateModalVisible}  updateModalVisible={updateModalVisible} />
                })}
            </ScrollView>
            <DeleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <UpdateModal setUpdateModalVisible={setUpdateModalVisible} updateModalVisible={updateModalVisible} />
            <PlusButton navigation={navigation} />
        </View>
    )
}

export default MangeUsersScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

