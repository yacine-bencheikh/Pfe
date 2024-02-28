import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAgentStore } from '../store/store'
import { useAuthStore } from '../store/store'
import React, { useState, useEffect } from 'react'
const UpdateModal = ({ setUpdateModalVisible, updateModalVisible }) => {
  const token = useAuthStore(state => state.token._j) || useAuthStore(state => state.token)
  const updateAgent = useAgentStore(state => state.updateAgent)
  const currentAgent = useAgentStore(state => state.currentAgent)
  const [switche, setSwitche] = useState(true)
  const [firstName, setFirstName] = useState(currentAgent.firstName)
  const [lastName, setLastName] = useState(currentAgent.lastName)
  const [email, setEmail] = useState(currentAgent.email)
  const [password, setPassword] = useState(currentAgent.password)
  const [phone, setPhone] = useState(currentAgent.phone)
  const [mobile, setMobile] = useState(currentAgent.mobile)
  const [address, setAddress] = useState(currentAgent.address)
  const [role, setRole] = useState(currentAgent.role)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  }

  const handleUpdate = (token) => {
    const updatedData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      mobile,
      address,
      role
    }
    if (switche) {
      console.log(1);
      setSwitche(!switche)
    } else {
      console.log(updatedData);
      updateAgent(currentAgent.id, updatedData, token)
      setSwitche(!switche)
    }
  }
  useEffect(() => {
    setFirstName(currentAgent.firstName);
    setLastName(currentAgent.lastName);
    setEmail(currentAgent.email);
    setPassword(currentAgent.password);
    setPhone(currentAgent.phone);
    setMobile(currentAgent.mobile);
    setAddress(currentAgent.address);
    setRole(currentAgent.role);
  }, [currentAgent]);

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
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.firstName || "").substring(0, 8)} onChangeText={text => setFirstName(text)}
                  value={firstName} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Last name: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.lastName || "")} onChangeText={text => setLastName(text)}
                  value={lastName} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Email: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.email || "").substring(0, 8)} onChangeText={text => setEmail(text)}
                  value={email} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Password: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.password || "").substring(0, 8)} onChangeText={text => setPassword(text)}
                  value={password} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Phone: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.phone || "").substring(0, 8)} onChangeText={text => setPhone(text)}
                  value={phone} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Mobile: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.mobile || "").substring(0, 8)} onChangeText={text => setMobile(text)}
                  value={mobile} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Adress:</Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.address || "").substring(0, 8)} onChangeText={text => setAddress(text)}
                  value={address} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text>Role: </Text>
                <TextInput className='border rounded-2xl w-1/2 pl-2' placeholder={(currentAgent.role || "").substring(0, 8)} onChangeText={text => setRole(text)}
                  value={role} />
              </View>
            </View>
          }
          <View className='flex-row space-x-4 mt-10'>
            <TouchableOpacity className='rounded-2xl bg-blue-400 py-2 px-4' onPress={() => { setUpdateModalVisible(!updateModalVisible); setSwitche(true) }} ><Text>no</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleUpdate(token)}} className='rounded-2xl bg-yellow-300 py-2 px-4' ><Text>Update</Text></TouchableOpacity>
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