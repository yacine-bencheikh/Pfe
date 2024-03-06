import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import QRCode from "react-native-qrcode-svg";
import React from 'react'
import { useReservationStore } from '../../store/store';

const Res4 = () => {
    const reservation = useReservationStore(state => state.reservation);
    return (
        <View className='flex-1 bg-blue-50 justify-center items-center'>
            <View className=' bg-red-300 items-center space-y-14 p-12 rounded-2xl'>
                <View className='flex-row space-x-10 items-center'>
                    <View className='flex-row space-x-1 items-center '>
                        <FontAwesomeIcon icon={faIdBadge}
                            size={16}
                        />
                        <Text className='font-bold text-sm'>Profile id</Text>
                    </View>
                    <Text>{reservation.iccid}</Text>
                </View>
                <View>
                    <QRCode value='marhbee bik' size={200} />
                </View>
                <View>
                    <TouchableOpacity className='flex-row'>
                        <FontAwesomeIcon icon={faDownload} />
                        <Text>Télecharger/Imprimé</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Res4