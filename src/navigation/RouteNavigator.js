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
import HomeNavigator from './HomeNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();




const RouteNavigator = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SearchResults} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default RouteNavigator

const styles = StyleSheet.create({})