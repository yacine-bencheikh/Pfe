import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from '../components/HomeButton';
import { Menu, Button } from 'react-native-paper';
import { useAuthStore } from '../store/store';
function HomeScreen({ navigation }) {
    const { width, height } = Dimensions.get('window');
    const logOut = useAuthStore(state => state.logOut);
    const userData = useAuthStore(state => state.userData);
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <SafeAreaView style={{width, height, flex:1}}  className='bg-darkBg'>
            
                <View className='justify-end items-start w-96 mb-1 bg-darkBg ml-3'>
                    <TouchableOpacity
                        className='bg-transparent w-6 z-10 ' 
                        style={{position: 'absolute', top: 15, right: 360, zIndex: 1,}}
                        onPress={openMenu}
                    >
                        <Image
                            source={require('../assets/menu-4-256.gif')}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button style={{ backgroundColor: 'transparent' }}></Button>}
                    >
                        <Menu.Item onPress={() => {logOut(navigation)}} title="Log out" />
                        <Menu.Item onPress={() => { }} title= {userData.firstName} />
                        <Menu.Item onPress={() => { }} title={userData.lastName}/>
                    </Menu>
                </View>
            <View className='flex-1 bg-darkBg  items-center justify-center'>
                <View className='mx-5 mb-20'>
                    <Text className='text-2xl font-bold text-center mb-3 text-textColor'>Bienvenue sur PoSGUI</Text>
                    <Text className='text-lg text-center mb-0 align-middle text-textColor'>vous etes sur le point de commencer une nouvelle réservationde profil e-sim Veuillez démarrer le processus en cliquant sur le button ci-dessous</Text>
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