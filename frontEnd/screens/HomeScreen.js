import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from '../components/HomeButton';
import { Menu, Button } from 'react-native-paper';
import { useAuthStore } from '../store/store';
function HomeScreen({ navigation }) {
    const logOut = useAuthStore(state => state.logOut);
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <SafeAreaView className='flex-1 bg-blue-200  items-center justify-center'>
            
                <View className='justify-end items-start w-96  '>
                    <TouchableOpacity
                        className='bg-transparent w-6 z-10' 
                        style={{position: 'absolute', top: 15, right: 360, zIndex: 1,}}
                        onPress={openMenu}
                    >
                        <Image
                            source={require('../assets/menu.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button style={{ backgroundColor: 'transparent' }}></Button>}
                    >
                        <Menu.Item onPress={() => {logOut(navigation)}} title="Log out" />
                        <Menu.Item onPress={() => { }} title="Item 2" />
                        <Menu.Item onPress={() => { }} title="Item 3" />
                    </Menu>
                </View>
            <View className='flex-1 bg-blue-200  items-center justify-center'>
                <View className='mx-5 mb-20'>
                    <Text className='text-2xl font-bold text-center mb-3'>Bienvenue sur PoSGUI</Text>
                    <Text className='text-lg text-center mb-0 align-middle'>vous etes sur le point de commencer une nouvelle réservationde profil e-sim Veuillez démarrer le processus en cliquant sur le button ci-dessous</Text>
                </View>
                <View>
                    <HomeButton title={'Nouvelle réservation de profil'} onPress={() => navigation.navigate('DetailStack')} />
                    <HomeButton title={'Détails des réservations'} />
                    <HomeButton title={'Gestion des utilisateurs'} onPress={() => navigation.navigate('MangeUsersStack')} />
                    <HomeButton title={'Uploder un fichier'} onPress={() => navigation.navigate('UploadFileStack')}/>
                    <HomeButton title={'Statistiques'} />
                </View>
            </View>
        </SafeAreaView >
    );
}

export default HomeScreen