import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import COLORS from '../assets/clrs/Colors'


const CustomPlaceResult = ({ data }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'
          ? <Entypo name={'home'} size={20} color={COLORS.white} />
          : <Entypo name={'location-pin'} size={20} color={COLORS.white} />
        }

      </View>
      <Text style={styles.locationResult}>{data.description || data.vicinity}</Text>
    </View>
  )
}

export default CustomPlaceResult

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10

  },
  iconContainer: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 50,
    marginRight: 10

  },

})
