import { StyleSheet, Text, TextInput, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthStore } from '../store/store'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Picker} from "@react-native-picker/picker"
import ActionTuple from '../components/ActionTuple'
const Statistique = () => {
  const token = useAuthStore(state => state.token)
  const [data, setData] = useState([]); // State to hold the data

  const getAllActions = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3100/api/actions/getAllActions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setData(response.data); // Set the data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllActions();
  }, []);

  if(!data.length){
    return (
      <ActivityIndicator/>
    )}
    else{
      return (
        <SafeAreaView>
          <ActionTuple items={data} />
        </SafeAreaView>
          
      )
  }
}

export default Statistique