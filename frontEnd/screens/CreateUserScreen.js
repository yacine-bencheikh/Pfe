import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const CreateUserScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'admin', value: 'admin' },
        { label: 'agent', value: 'agent' }
    ]);
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
                        />
                        <TextInput
                            placeholder='Laste name'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        />
                    </View>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#b1b2b8'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        className='border border-black-300 rounded-2xl px-5 py-4'
                        style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#b1b2b8'
                        secureTextEntry
                        autoCapitalize='none'
                        className='border border-black-300 rounded-2xl px-5 py-4'
                        style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                    />
                    <View className='flex-row space-x-3'>
                        <TextInput
                            placeholder='Phone'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        />
                        <TextInput
                            placeholder='Mobile'
                            placeholderTextColor='#b1b2b8'
                            className='border border-black-300 rounded-2xl px-5 py-4 w-44'
                            style={{ backgroundColor: '#10151b', color: '#b1b2b8' }}
                        />
                    </View>
                    <DropDownPicker
                        textStyle={{ color: '#b1b2b8' }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={{
                            width: '96%', backgroundColor: '#10151b', borderRadius: 16, paddingLeft: 20,
                            paddingRight: 20, paddingTop: 16,
                            paddingBottom: 16
                        }}
                    />
                </View>
            </View>
                    <TouchableOpacity  className='px-28 py-4 rounded-md justify-center items-center w-80 mb-6' style={{ backgroundColor: '#0630F4' }}>
                        <Text style={{ color: '#fff' }} className='font-bold text-lg' >LOG IN</Text>
                    </TouchableOpacity >
        </SafeAreaView>
    )
}

export default CreateUserScreen

const styles = StyleSheet.create({})