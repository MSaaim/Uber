import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
const App = () => {
  return (
    <View>
      <SearchResults />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})