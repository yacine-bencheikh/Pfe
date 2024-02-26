import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { useAuthStore } from '../store/store';


const CreateUserScreen = () => {
    const id = useAuthStore(state => state.user);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'admin', value: 'admin' },
        { label: 'agent', value: 'agent' }
    ]);
    const [value, setValue] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');
    const registerUser = async () => {
        const response = await fetch('http://10.0.2.2:3100/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                phone,
                mobile,
                address,
                role,
                lastcnct: new Date().toISOString(),
                createdBy: id,
            }),
        });
    
        const data = await response.json();
        console.log(data);
    };
    return (
        <SafeAreaView className='flex-1 justify-center items-center' style={{ backgroundColor: '#080b12' }}>
            <View className='justify-center items-center m-4'>
                <View className='items-start w-full ml-4'>
                    <Text style={{ color: '#b1b2b8' }} className='font-bold text-3xl mb-14' >Somthing</Text>
                </View>
                <View className='mb-6' >
                    <Text style={{ color: '#b1b2b8' }} className='mb-5 font-bold text-4xl' >Registration</Text>
                    <Text style={{ color: '#b1b2b8' }} >lorem epsum hkeya twila w behya ntastiw beha w ahna hejtna bheja twila chwaya </Text>
                </View>
                <View className='space-y-3'>
                    <View className='flex-row space-x-3'>
                        <TextInput
                            placeholder='First name'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                            onChangeText={setFirstName}
                            value={firstName}
                        />
                        <TextInput
                            placeholder='Laste name'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                            onChangeText={setLastName}
                            value={lastName}
                        />
                    </View>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#b1b2b8'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        className='border border-black-300 rounded-2xl px-5 py-4'
                        style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#b1b2b8'
                        secureTextEntry
                        autoCapitalize='none'
                        className='border border-black-300 rounded-2xl px-5 py-4'
                        style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <View className='flex-row space-x-3'>
                        <TextInput
                            placeholder='Phone'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                            onChangeText={setPhone}
                            value={phone}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Mobile'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                            onChangeText={setMobile}
                            value={mobile}
                            keyboardType='numeric'
                        />
                    </View>
                    <TextInput
                        placeholder='Adress'
                        placeholderTextColor='#b1b2b8'
                        autoCapitalize='none'
                        className='border border-black-300 rounded-2xl px-5 py-4'
                        style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        onChangeText={setAddress}
                        value={address}
                    />
                    <DropDownPicker
                        textStyle={{ color: '#b1b2b8' }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
                        setValue={(value) => {
                            setValue(value);
                            setRole(value);
                        }}
                        style={{
                            width: '96%', backgroundColor: '#10151b', borderRadius: 16, paddingLeft: 20,
                            paddingRight: 20, paddingTop: 16,
                            paddingBottom: 16, marginBottom: 16
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={registerUser} className='px-2 py-2 rounded-md justify-center items-center  mb-6' style={{ backgroundColor: '#0630F4' }}>
                <Text style={{ color: '#fff' }} className='font-bold text-lg' >Register</Text>
            </TouchableOpacity >
        </SafeAreaView>
    )
}

export default CreateUserScreen

const styles = StyleSheet.create({})