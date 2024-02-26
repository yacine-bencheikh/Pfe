import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAgentStore } from '../store/store'
import { useAuthStore } from '../store/store'
const DeleteModal = ({ modalVisible, setModalVisible }) => {
    const currentAgent = useAgentStore(state => state.currentAgent)
    const deleteAgent = useAgentStore(state => state.deleteAgent)
    const token = useAuthStore(state => state.token);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View className='flex-1 justify-center items-center' >
                <View style={styles.modalView}>
                    <View className='justify-end items-end w-72 mb-3 '>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className='mt-3' ><Text>X</Text></TouchableOpacity>
                    </View>
                    <Text className='mt-5'>Are you sure to delete {currentAgent.firstName + " " + currentAgent.lastName}  forever?</Text>
                    <View className='flex-row space-x-4 mt-10'>
                        <TouchableOpacity className='rounded-2xl bg-blue-400 py-2 px-4' onPress={() => setModalVisible(!modalVisible)} ><Text>no</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{deleteAgent(currentAgent.id,token._j);setModalVisible(!modalVisible)}} className='rounded-2xl bg-yellow-300 py-2 px-4' ><Text>yes</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingBottom: 35,
        paddingRight: 35,
        paddingLeft: 35,
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







{/* <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure to delete {currentAgent.firstName + " " + currentAgent.lastName}  forever? </Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View> */}