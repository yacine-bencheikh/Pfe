import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react'

const Tojrab = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'js' }
  ]);
  return (
    <View className='flex-1 bg-blue-50 justify-center items-center' >
      <View className='items-center mx-5 bg-red-300 rounded-2xl p-10 shadow-2xl' >
        <Text className='mb-10 font-bold text-xl '>Sélectionner le type de profile</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          classNma='bg-gray-200'
          dropDownContainerStyle="className='bg-white'"
        />
        <View className='flex-row justify-between w-52 mt-8' >
          <TouchableOpacity className='bg-red-500 px-6 py-2 rounded-2xl mt-5'><Text>Annuler</Text></TouchableOpacity>
          <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-2xl mt-5' ><Text>Suivant</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


export default Tojrab