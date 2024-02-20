import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useCountStore, useDataStore } from '../store/store'

const Statistique = () => {


    return (
        <View style={{ flex: 0.75 }} className='bg-red-200 rounded-b-2xl '>
            <Text>salem </Text>
            <Text >salem</Text>
            <View>
                <TouchableOpacity onPress={() => increment()} ><Text>silem</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => decrement()} ><Text>silem-1</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Statistique;