import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'

const HistoryScreen = () => {
  return (
    <View style= {styles.mainContainer}>
    <Text style={styles.headingText}> Your History</Text>
      
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  mainContainer:{
    height: '100%',
    backgroundColor: COLORS.white
  },
  headingText:{
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    color: COLORS.dark
  }
})