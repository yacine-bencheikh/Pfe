import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useApiStore } from '../store/store';

const PickCredentielScreen = ({ navigation }) => {
    const credentiel = useApiStore(state => state.credentiel);
    const addPickedItem = useApiStore(state => state.addPickedItem);
    const pickedDocumentPath = useApiStore(state => state.pickedDocumentPath);
    const [maw, setMaw] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result.assets[0].uri);
        if (credentiel === 'IdentityCard') {
            if (!result.canceled && pickedDocumentPath.length <= 1) {
                addPickedItem(result.assets[0].uri);
                console.log(pickedDocumentPath);
                setMaw(true);
            }
        }else if (credentiel === 'Passport' || credentiel === 'DriversLicense') {
            if (!result.canceled && pickedDocumentPath.length < 1) {
                addPickedItem(result.assets[0].uri);
                console.log(pickedDocumentPath);
                setMaw(true);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text>PickCredentielScreen</Text>
            <Button title="Pick an image from gallery" onPress={pickImage} />
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('TakePicturScreen')}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            {maw && pickedDocumentPath.map((e) => {
                return <Image source={{ uri: e }} style={{ width: 200, height: 200 }} />
            })}
        </View>
    );
};

export default PickCredentielScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});