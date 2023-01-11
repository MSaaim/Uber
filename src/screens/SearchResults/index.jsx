import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'

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