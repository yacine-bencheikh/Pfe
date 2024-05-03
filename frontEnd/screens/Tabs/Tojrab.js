import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from "axios";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react'
import { useAuthStore, useReservationStore } from '../../store/store';

const Tojrab = ({ navigation }) => {
  const token = useAuthStore(state => state.token);
  const userData = useAuthStore(state => state.userData);
  const setProfileType = useReservationStore(state => state.setProfileType);
  const setReservation = useReservationStore(state => state.setReservation);
  const reservation = useReservationStore(state => state.reservation);
  const annulerReservation = useReservationStore(state => state.annulerReservation);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Sim swap', value: 'sim swap' },
    { label: 'Nouvelle acquisation', value: 'Nouvelle acquisation' }
  ]);
  const getReservation = async (profileType) => {
    try {
      if (!profileType) {
        return;
      } 
      
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (profileType === "Nouvelle acquisation") {
        const response = await axios.get(`http://10.0.2.2:3100/api/reservations/getOneRes/new`, config);
        setReservation({ ...response.data, UserId: userData.id, createdBy: userData.createdBy });
      } else if (profileType === "Sim swap") {
        const response = await axios.get(`http://10.0.2.2:3100/api/reservations/getOneRes/swap`, config);
        setReservation({ ...response.data, UserId: userData.id, createdBy: userData.createdBy });
      }
    } catch (error) {
      console.log(error);
    }
}

  useEffect(() => {
    getReservation(value);
  }, [value])
  return (
    <View className='flex-1 bg-darkBg justify-center items-center' >
      <View className='items-center mx-5 bg-modalColor rounded-2xl p-10 shadow-2xl' >
        <Text className='mb-10 font-bold text-xl text-textColor '>Sélectionner le type de profile</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          className='bg-darkInput'
          style={{ backgroundColor: '#fff' }}
          dropDownContainerStyle={{ backgroundColor: '#fff', color: '#fff' }}
          labelStyle={{ color: '#b1b2b8', fontSize: 14 }} // Set your color here
          onChangeValue={(value) => { setProfileType(value) }}
        />
        {hidden && <Text className='mt-5' style={{ color: "red" }}>you need to select item</Text>}
        <View className='flex-row justify-between w-52 mt-8' >
          <TouchableOpacity className='bg-red-500 px-6 py-2 rounded-2xl mt-5' onPress={() => { annulerReservation(reservation, navigation,token) }}><Text>Annuler</Text></TouchableOpacity>
          <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-2xl mt-5' onPress={value ? () => { navigation.navigate("Tojrab2"); } : () => { setHidden(!hidden) }} ><Text>Suivant</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


export default Tojrab