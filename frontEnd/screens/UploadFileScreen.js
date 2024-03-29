import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
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
        <SafeAreaView>
            <View>
                <Text>UploadFileScreen</Text>
                <Button title="Pick Document" onPress={() => { pickDocument(); console.log(selectedDocument) }} />
                {selectedDocument && (
                    <Text>Selected Document: {selectedDocument.name}</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default UploadFileScreen;

const styles = StyleSheet.create({});
