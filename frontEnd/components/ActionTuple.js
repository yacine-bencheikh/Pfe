import React, { useState } from 'react';
import { View, Platform, SafeAreaView, Button, TouchableOpacity, Text, Image } from 'react-native';
import { Appbar, Menu, Searchbar, Divider } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ActionTuple = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [action, setAction] = useState("")
    const [userType,setUserType]= useState("")

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const x = currentDate.toISOString().split('T')[0]
        console.log('====================================');
        console.log(x);
        console.log('====================================');
    };

    const showDatepicker = () => {
        setShow(true);
    };
    const openMenu1 = () => setVisible1(true);
    const closeMenu1 = () => setVisible1(false);

    const openMenu2 = () => setVisible2(true);
    const closeMenu2 = () => setVisible2(false);

    return (
        <SafeAreaView>
            <View className='bg-slate-600 p-5 mb-2' >
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
            <View className='flex-row justify-around' >
                <TouchableOpacity onPress={showDatepicker}>
                    <Image
                        source={require('../assets/calendar.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
                <Menu
                    visible={visible1}
                    onDismiss={closeMenu1}
                    anchor={<TouchableOpacity onPress={openMenu1}>
                        <Image
                            source={require('../assets/hotel-bell.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>}>
                    <Menu.Item onPress={() => {setAction("reservation temporaire") }}  title="reservation temporaire" />
                    <Divider />
                    <Menu.Item onPress={() => {setAction("Annulation de reservation") }} title="Annulation de reservation" />
                    <Divider />
                    <Menu.Item onPress={() => {setAction("reservation complet") }} title="reservation complet" />
                    
                </Menu>
                <Menu
                    visible={visible2}
                    onDismiss={closeMenu2}
                    anchor={<TouchableOpacity onPress={openMenu2} >
                        <Image
                            source={require('../assets/user.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>}>
                    <Menu.Item onPress={() => {setUserType("admin") }} title="admin" />
                    <Divider />
                    <Menu.Item onPress={() => {setUserType("agent") }} title="agent" />
                    
                </Menu>

            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}


        </SafeAreaView>
    );
}

export default ActionTuple;