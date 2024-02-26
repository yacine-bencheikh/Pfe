import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAgentStore } from '../store/store'
import React, { useState } from 'react'
const UpdateModal = ({ setUpdateModalVisible, updateModalVisible }) => {
  const currentAgent = useAgentStore(state => state.currentAgent)
  const [switche, setSwitche] = useState(true)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={updateModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View className='flex-1 justify-center items-center' >
        <View style={styles.modalView}  >
          <View className='justify-end items-end w-72 mb-3 '>
            <TouchableOpacity onPress={() => setUpdateModalVisible(!updateModalVisible)} className='mt-3' ><Text>X</Text></TouchableOpacity>
          </View>
          {switche ? <View>
            <Text>Name:   {currentAgent.firstName + ' ' + currentAgent.lastName}</Text>
            <Text>Email:  {currentAgent.email}</Text>
            <Text>Phone:  {currentAgent.phone} </Text>
            <Text>Mobile:   {currentAgent.mobile} </Text>
            <Text>address:  {currentAgent.address} </Text>
            <Text>Role:   {currentAgent.role}</Text>
            <Text>last Connect: {formatDate(currentAgent.lastcnct)}</Text>
          </View> :
            <View className=' justify-center p-2'>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>First name: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.firstName.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Last name: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.lastName} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Email: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.email.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Password: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.password.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Phone: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.phone.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Mobile: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.mobile.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Adress:</Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.address.substring(0,8)} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Role: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={currentAgent.role.substring(0,8)} />
              </View>
            </View>
          }
          <View className='flex-row space-x-4 mt-10'>
            <TouchableOpacity className='rounded-2xl bg-blue-400 py-2 px-4' onPress={() => setUpdateModalVisible(!updateModalVisible)} ><Text>no</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setSwitche(!switche)} className='rounded-2xl bg-yellow-300 py-2 px-4' ><Text>Update</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default UpdateModal

const styles = StyleSheet.create({
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
  }
})