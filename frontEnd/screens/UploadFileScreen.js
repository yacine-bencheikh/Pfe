import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image,Button } from 'react-native';
import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import axios from 'axios';

const UploadFileScreen = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*', // You can specify the MIME type here to filter the documents
            });
            if (!result.canceled) {
                const fileContent = await FileSystem.readAsStringAsync(result.assets[0].uri, { encoding: FileSystem.EncodingType.UTF8 });
                const response = await axios.post('http://10.0.2.2:3100/api/reservations/uploadData', { data: fileContent });
            }
        } catch (error) {
            console.log('Error picking document:', error);
        }
    };
    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-darkInput '>
                <Text>UploadFileScreen</Text>
            <View className='items-center justify-center w-34 '>
                <Button title="Pick Document" onPress={() => { pickDocument(); console.log(selectedDocument) }} />
                    <Text>Pick Document</Text>
                {selectedDocument && (
                    <Text>Selected Document: {selectedDocument.name}</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default UploadFileScreen;

const styles = StyleSheet.create({});

                // <TouchableOpacity className='items-center' /*onPress={() => { pickDocument(); console.log(selectedDocument) }}*/>
                //     <Image
                //         source={require('../assets/google-docs.png')} // replace with the path to your image
                //         style={{ width: 200, height: 200 }} // replace with the size you want
                //         imageTintColor='white'
                        
                //     />
                // </TouchableOpacity>