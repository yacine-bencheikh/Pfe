import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Tojrab2 = () => {
  return (
    <View className="flex-1 bg-blue-50 justify-center items-center">
      <View className='flex-col space-y-20 bg-red-300 rounded-2xl p-10' >
        <View className='flex-row space-x-28 items-center'>
          <View className='flex-row space-x-1 items-center'>
            <FontAwesomeIcon icon={faIdBadge}
              size={16}
            />
            <Text className='font-bold text-sm'>Profile id</Text>
          </View>
          <Text className='font-bold text-sm'>605020100686</Text>
        </View>
        <View className='flex-row space-x-36'>
          <View className='flex-row space-x-1 items-center'>
            <FontAwesomeIcon icon={faCircleCheck} />
            <Text className='font-bold text-sm'>Etat</Text>
          </View>
          <Text className='font-bold text-sm'>Réserver</Text>
        </View>
        <View className='flex-row justify-between mx-10 ' >
          <TouchableOpacity className='bg-red-500 px-6 py-2 rounded-2xl '><Text>Annuler</Text></TouchableOpacity>
          <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-2xl ' ><Text>Suivant</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Tojrab2