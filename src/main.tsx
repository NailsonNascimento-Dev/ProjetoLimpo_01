import React from 'react';
import Evento from './components/evento';
import UsuarioGithub from './components/user';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//https://reactnavigation.org/docs/bottom-tab-navigator#example

const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>

            <Tab.Navigator tabBarOptions={{
                style: {
                    backgroundColor: '#ccc',
                    borderTopColor: '#fff'
                },
                activeTintColor: '#FFF',
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,

                }
            }} >
                <Tab.Screen name="Home" component={Evento} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="Cena" component={UsuarioGithub}
                    options={{
                        tabBarLabel: 'Cena',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size} />
                        ),
                        tabBarBadge: 3,
                    }} />
                <Tab.Screen name="Time" component={UsuarioGithub}
                    options={{
                        tabBarLabel: 'Time',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

