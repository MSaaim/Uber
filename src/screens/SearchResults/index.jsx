import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'
import { useRoute } from '@react-navigation/native'

const SearchResults = (props) => {

  console.log(props);



  return (
    <View>
      <RouteMap origin={props.route.params.OriginPlace} destination={props.route.params.DestinationPlace} />


      <UberTypes />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})