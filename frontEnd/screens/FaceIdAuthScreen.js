import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ZIGN } from '@env';
import { useApiStore } from '../store/store';

const FaceIdAuthScreen = ({navigation}) => {
    const emptyPickedItems = useApiStore(state => state.emptyPickedItems);
    const setCredentiel = useApiStore(state => state.setCredentiel);
    const [open, setOpen] = useState(false);    
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Passport', value: 'Passport' },
        { label: 'IdentityCard', value: 'IdentityCard' },
        { label: 'DriversLicense', value: 'DriversLicense'}
    ]);
    useEffect(() => {
        setCredentiel(value);
        emptyPickedItems();
    }, [value]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>KYC Process</Text>
                <Text style={styles.text}>
                    We will be conducting a Know Your Customer (KYC) process.
                    Please have a valid ID (ID card or passport...) ready for validation.
                    Be prepared to take a 3-sided selfie.
                </Text>
                <DropDownPicker
                        textStyle={{ color: '#b1b2b8' }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
                        setValue={(value) => {
                            setValue(value);
                        }}
                        style={{
                            width: '96%', backgroundColor: '#10151b', borderRadius: 16, paddingLeft: 20,
                            paddingRight: 20, paddingTop: 16,
                            paddingBottom: 16, marginBottom: 16
                        }}
                    />
                    <TouchableOpacity 
                style={styles.nextButton}
                onPress={() => navigation.navigate('PickCredentielScreen')}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FaceIdAuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    content: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    picker: {
        width: '100%',
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