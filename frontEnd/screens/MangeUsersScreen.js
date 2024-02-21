import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlusButton from '../components/PlusButton'
import AgentCard from '../components/AgentCard'

const MangeUsersScreen = () => {
    return (
        <View className=' m-4 my-2'>
            <Text className='font-bold text-xl mb-4'>Your Users</Text>
            <ScrollView  style={{maxHeight:600, marginBottom:12}}>
                <AgentCard />
                <AgentCard />
                
            </ScrollView>
            <PlusButton/>
        </View>
    )
}

export default MangeUsersScreen

const styles = StyleSheet.create({})

