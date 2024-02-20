import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react';

// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

const Res3 = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View className="flex-1 bg-blue-50 justify-center items-center">
            <View className='flex-col space-y-20 bg-red-300 rounded-2xl p-8' >
                <View className='flex-row space-x-36 items-center'>
                    <View className='flex-row space-x-1 items-center'>
                        <FontAwesomeIcon icon={faIdBadge}
                            size={16}
                        />
                        <Text className='font-bold text-sm'>Profile id</Text>
                    </View>
                    <Text className='font-bold text-sm'>605020100686</Text>
                </View>
                <View className='flex-row space-x-12'>
                    <View className='flex-row space-x-1 items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <Text className='font-bold text-sm'>Vérification de contrat</Text>
                    </View>
                    <View className='flex-row justify-center items-center space-x-1'>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled} />
                        <Text className='font-bold text-sm'>D'accord</Text>
                    </View>
                </View>
                <View className='flex-row justify-between mx-10 ' >
                    <TouchableOpacity className='bg-red-500 px-6 py-2 rounded-2xl '><Text>Annuler</Text></TouchableOpacity>
                    <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-2xl ' ><Text>Suivant</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Res3;