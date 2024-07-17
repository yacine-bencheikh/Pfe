import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CameraComp from '../components/CameraComp'
import { useApiStore } from '../store/store';
import { ActivityIndicator } from 'react-native-paper';

const TakePicturScreen = ({ navigation }) => {
    const [array, setArray] = useState([])
    const [showCamera, setShowCamera] = useState(true);
    const documentsPath = useApiStore((state) => state.documentsPath);
    const kycProcess = useApiStore((state) => state.kycProcess)
    const createSession = useApiStore((state) => state.createSession)
    const addDocs = useApiStore((state) => state.addDocs)
    const addSelfies = useApiStore((state) => state.addSelfies)
    const startAnalysis = useApiStore((state) => state.startAnalysis)
    const getAnalysesResult = useApiStore((state) => state.getAnalysesResult)
    const credentiel = useApiStore((state) => state.credentiel)
    const pickedDocumentPath = useApiStore((state) => state.pickedDocumentPath)
    const [loading,setLoading] = useState(false)
    return loading? <ActivityIndicator/> : (
        <View className='justify-center items-center'>
            {showCamera ? <CameraComp array={array} setArray={setArray} /> : null}
            <Text style={{ fontWeight: 'bold' }}>Onboarding Swiper</Text>
            {array.map((photo, index) => (
                <View key={index}>
                    <Image source={{ uri: photo.uri }} style={{ width: 50, height: 50 }} />
                    <Text>{photo.position}</Text>
                    {index === 2 ? <TouchableOpacity className='bg-blue-500 p-3 rounded-full' onPress={async () => { setLoading(true)
                        const result = await kycProcess(createSession, addDocs, addSelfies, startAnalysis, getAnalysesResult, 1, credentiel, pickedDocumentPath, array)

                        if (result === "DECLINED") {
                            navigation.navigate('FaildPage')
                        } else if (result === "ACCEPTED") {
                            navigation.navigate('SucessPage')
                        }
                        setLoading(false)
                    }}><Text>done</Text></TouchableOpacity> : null}
                </View>
            ))}
        </View>
    )
}

export default TakePicturScreen

const styles = StyleSheet.create({})