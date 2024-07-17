import React, { useEffect, useState } from 'react';
import { View, Platform, SafeAreaView, Button, TouchableOpacity, Text, Image } from 'react-native';
import { Appbar, Menu, Searchbar, Divider, DataTable, ActivityIndicator } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyDataTable from './MyDataTable';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ActionTuple = ({ items }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [date, setDate] = useState(new Date());
    const [itemsToShow, setItemsToShow] = useState(items)
    const [show, setShow] = useState(false);
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [action, setAction] = useState("")
    const [userType, setUserType] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    const NameFilter = (items) => {
        return items.filter(item => item.userName.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    const DateFilter = (items) => {
        return items.filter(item => item.createdAt.toString().split('T')[0] === date.toISOString().split('T')[0])
    }
    const ActionFilter = (items) => {
        return items.filter(item => item.action && item.action.split(" ")[1] === action)
    }
    
    const UserTypeFilter = (items) => {
        return items.filter(item => item.action && item.action.split(" ")[1] === userType)
    }

    useEffect(() => {
        let filteredItems = [...items];

        if (searchQuery !== '') {
            filteredItems = NameFilter(filteredItems);
        }
        if (date !== new Date()) {
            filteredItems = DateFilter(filteredItems);
        }
        if (action !== "") {
            filteredItems = ActionFilter(filteredItems);
        }
        if (userType !== "") {
            filteredItems = UserTypeFilter(filteredItems);
        }

        setItemsToShow(filteredItems);
        setIsLoading(false);
        console.log('itemsToShow', itemsToShow);
    }, [searchQuery, date, action, userType,items])


    const onChange = (event, selectedDate) => {
        if (selectedDate === undefined) {
            // Cancel button was clicked
            setDate(new Date());
        } else {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
        }
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
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <Menu
                    visible={visible1}
                    onDismiss={closeMenu1}
                    anchor={<TouchableOpacity onPress={openMenu1}>
                        <Image
                            source={require('../assets/hotel-bell.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>}>
                    <Menu.Item onPress={() => { setAction("reservation temporaire") }} title="reservation temporaire" />
                    <Divider />
                    <Menu.Item onPress={() => { setAction("Annulation de reservation") }} title="Annulation de reservation" />
                    <Divider />
                    <Menu.Item onPress={() => { setAction("reservation complet") }} title="reservation complet" />

                </Menu>
                <Menu
                    visible={visible2}
                    onDismiss={closeMenu2}
                    anchor={<TouchableOpacity onPress={openMenu2} >
                        <Image
                            source={require('../assets/user.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>}>
                    <Menu.Item onPress={() => { setUserType("admin") }} title="admin" />
                    <Divider />
                    <Menu.Item onPress={() => { setUserType("agent") }} title="agent" />

                </Menu>


            </View>
            <Text className='text-2xl mt-2 ml-2' >Your users actions</Text>

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
            {isLoading? <ActivityIndicator/>:<MyDataTable items={itemsToShow} />}
            <View className='m-24' >
            <Button title='logs'></Button>
            </View>

        </SafeAreaView>
    )
};


export default ActionTuple;