import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Menu, Button } from 'react-native-paper';

export default function Dropdown() {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
                style={{ 
                    backgroundColor: 'transparent', // Making TouchableOpacity transparent
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}
                onPress={openMenu}
            >
                <Image 
                    source={require('../assets/menu.png')} // Provide the path to your PNG image
                    style={{ width: 20, height: 20 }} // Adjust width and height as needed
                />
            </TouchableOpacity>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button  style={{ backgroundColor: 'transparent' }}></Button>}
            >
                <Menu.Item onPress={() => { }} title="Item 1" />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
        </View>
    );
}
