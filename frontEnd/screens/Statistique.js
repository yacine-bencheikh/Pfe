import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState} from 'react'
import axios from 'axios'
import { useAuthStore } from '../store/store'

const Statistique = () => {
  const token = useAuthStore(state => state.token)
  const [actions,setActions] = useState([])
  const getAllActions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3100/api/actions/getAllActions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setActions(getAllActions());
  }, []);

  return (
    <View>
      <Text>Statistique</Text>
      
    </View>
  )
}

export default Statistique