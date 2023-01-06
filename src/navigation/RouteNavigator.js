import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator'
import COLORS from '../assets/clrs/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DummyScreen = (props) => {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text>History</Text>
    </View>
}
const WalletScreen = (props) => {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text>Wallet</Text>
    </View>
}
const HelpScreen = (props) => {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text>Help</Text>
    </View>
}
const SettingsScreen = (props) => {
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text>Settings</Text>
    </View>
}


const RouteNavigator = () => {
    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'History') {
                            iconName = focused ? 'history' : 'history';
                        } else if (route.name === 'Wallet') {
                            iconName = focused ? 'account-balance-wallet' : 'account-balance-wallet';
                        } else if (route.name === 'Chat') {
                            iconName = focused ? 'chat' : 'chat';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings';
                        }

                        return <MaterialIcons name={iconName} size={28} color={color} />
                    },
                })}
                tabBarOptions={{

                    activeTintColor: COLORS.activeTintColor,
                    inactiveTintColor: COLORS.inactiveTintColor,
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeNavigator}


                />
                <Tab.Screen
                    name="History"
                    component={DummyScreen}

                />

                <Tab.Screen
                    name="Chat"
                    component={HelpScreen} />
                <Tab.Screen
                    name="Wallet"
                    component={WalletScreen}

                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RouteNavigator

const styles = StyleSheet.create({})