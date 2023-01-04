import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
const App = () => {
  return (
    <View>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"}/>
      <DestinationSearch />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})