import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useApiStore } from '../store/store';

const TakePicturScreen = () => {
    const pickedDocumentPath = useApiStore(state => state.pickedDocumentPath);
    return (
        <View>
            <Text>TakePicturScreen</Text>
            <Image source={{ uri: pickedDocumentPath[0] }} style={{ width: 200, height: 200 }} />
            <Image source={{ uri: pickedDocumentPath[1] }} style={{ width: 200, height: 200 }} />
        
        </View>
    )
}

export default TakePicturScreen

const styles = StyleSheet.create({})