import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from '../components/HomeButton';


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView className='flex-1 bg-blue-200  items-center justify-center'>
            <View className='mx-5 mb-20'>
                <Text className='text-2xl font-bold text-center mb-3'>Bienvenue sur PoSGUI</Text>
                <Text className='text-lg text-center mb-0 align-middle'>vous etes sur le point de commencer une nouvelle réservationde profil e-sim Veuillez démarrer le processus en cliquant sur le button ci-dessous</Text>
                
            </View>
            <View>
                <HomeButton title={'Nouvelle réservation de profil'} onPress={()=>navigation.navigate('DetailStack')} />
                <HomeButton title={'Détails des réservations'}  />
                <HomeButton title={'Gestion des utilisateurs'} onPress={()=>navigation.navigate('MangeUsersStack')} />
                <HomeButton title={'Uploder un fichier'} />
                <HomeButton title={'Statistiques'} />

            </View>
        </SafeAreaView >
    );
}

export default HomeScreen