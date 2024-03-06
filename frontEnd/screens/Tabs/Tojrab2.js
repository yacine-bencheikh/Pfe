import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useReservationStore } from '../../store/store'

const Tojrab2 = ({navigation}) => {
  const reservation = useReservationStore(state => state.reservation);
  const profileType = useReservationStore(state => state.profileType);
  const annulerReservation = useReservationStore(state => state.annulerReservation);
  console.log(profileType);
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
          <Text className='font-bold text-sm'>{reservation.iccid} </Text>
        </View>
        {profileType === 'sim swap' ?
          <View className='flex-row space-x-28 items-center'>
            <View className='flex-row space-x-1 items-center'>
              <FontAwesomeIcon icon={faIdBadge}
                size={16}
              />
              <Text className='font-bold text-sm'>Profile id</Text>
            </View>
            <TextInput className='border-2 border-gray-400 rounded-2xl px-2 py-1' placeholder='put you number'  keyboardType="numeric" />
          </View>
          : null}
        <View className='flex-row space-x-36'>
          <View className='flex-row space-x-1 items-center'>
            <FontAwesomeIcon icon={faCircleCheck} />
            <Text className='font-bold text-sm'>Etat</Text>
          </View>
          <Text className='font-bold text-sm'>{reservation.chaineCar}</Text>
        </View>
        <View className='flex-row justify-between mx-10 ' >
          <TouchableOpacity className='bg-red-500 px-6 py-2 rounded-2xl ' onPress= {()=>annulerReservation(reservation,navigation)} ><Text>Annuler</Text></TouchableOpacity>
          <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-2xl ' onPress={()=>{navigation.navigate("Tojrab3")}} ><Text>Suivant</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Tojrab2