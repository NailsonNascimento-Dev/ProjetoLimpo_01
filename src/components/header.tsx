import React from 'react';
import { TopBar } from 'tuya-panel-kit'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


export default function Header() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Evento" component={Evento} />
                <Drawer.Screen name="Github" component={UsuarioGithub} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}











