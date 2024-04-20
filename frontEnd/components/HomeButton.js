import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeButton = ({ onPress, title }) => {
    return (
        
        <TouchableOpacity
            onPress={onPress}
            className='bg-darkInput w-80 h-12 items-center justify-center rounded-lg my-2 px-5'
        >
            <Text className='text-textColor text-lg'>{title}</Text>
        </TouchableOpacity>
    );
}

export default HomeButton





{/* <TouchableOpacity
                style={{width:'90%'}}
                className='bg-blue-500 justify-center items-center p-4 ' 
                title="Go to Details"
                onPress={() => navigation.navigate('DetailStack', { screen: 'Detail' })}
            >
                <Text>bot 1</Text>
            </TouchableOpacity> */}