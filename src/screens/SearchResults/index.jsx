import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'

const SearchResults = () => {
  return (
    <View>
      <RouteMap />


      <UberTypes />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})