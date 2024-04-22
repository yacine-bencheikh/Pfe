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
            <TouchableOpacity onPress={() => setUpdateModalVisible(!updateModalVisible)} className='mt-3' ><Text className='text-textColor'>X</Text></TouchableOpacity>
          </View>
          {switche ? <View>
            <Text className='text-textColor'>Name:   {currentAgent.firstName + ' ' + currentAgent.lastName}</Text>
            <Text className='text-textColor'>Email:  {currentAgent.email}</Text>
            <Text className='text-textColor'>Phone:  {currentAgent.phone} </Text>
            <Text className='text-textColor'>Mobile:   {currentAgent.mobile} </Text>
            <Text className='text-textColor'>address:  {currentAgent.address} </Text>
            <Text className='text-textColor'>Role:   {currentAgent.role}</Text>
            <Text className='text-textColor'>last Connect: {formatDate(currentAgent.lastcnct)}</Text>
          </View> :
            <View className=' justify-center p-2'>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor'>First name: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.firstName || "First name").substring(0, 8)} onChangeText={text => setFirstName(text)  }
                  value={firstName} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Last name: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.lastName || "Last name")} onChangeText={text => setLastName(text)}
                  value={lastName} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Email: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.email || "Email").substring(0, 8)} onChangeText={text => setEmail(text)}
                  value={email} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Password: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.password || "Password").substring(0, 8)} onChangeText={text => setPassword(text)}
                  value={password} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor'>Phone: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.phone || "Phone").substring(0, 8)} onChangeText={text => setPhone(text)}
                  value={phone} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Mobile: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.mobile || "Mobile").substring(0, 8)} onChangeText={text => setMobile(text)}
                  value={mobile} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Adress:</Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.address || "Adress").substring(0, 8)} onChangeText={text => setAddress(text)}
                  value={address} />
              </View>
              <View className='flex-row justify-between mb-2 items-center' >
                <Text className='text-textColor' >Role: </Text>
                <TextInput className='border-darkInput bg-darkInput rounded-2xl w-1/2 pl-2 text-textColor' placeholderTextColor={"#b1b2b8"} placeholder={(currentAgent.role || "Role").substring(0, 8)} onChangeText={text => setRole(text)}
                  value={role} />
              </View>
            </View>
          }
          <View className='flex-row space-x-4 mt-10'>
            <TouchableOpacity className='rounded-2xl bg-blueButton py-2 px-4' onPress={() => { setUpdateModalVisible(!updateModalVisible); setSwitche(true) }} ><Text>no</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleUpdate(token)}} className='rounded-2xl bg-yellow-600 py-2 px-4' ><Text>Update</Text></TouchableOpacity>
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
    backgroundColor: '#1a1f2b',
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