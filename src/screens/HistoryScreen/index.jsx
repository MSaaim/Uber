import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'
import HistoryCard from '../../components/HistoryCard'

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}> Your History</Text>
      
      <HistoryCard 
      placeName={'G9 Islamabad'} 
      price={500} 
      date={'01/01/2023'} 

      />
      <HistoryCard 
      placeName={'Saddar RawalPindi'} 
      price={800} 
      date={'29/12/2022'} 

      />
      <HistoryCard 
      placeName={'H-12 NUST ISlamabad'} 
      price={900} 
      date={'19/11/2022'} 

      />
      <HistoryCard
        placeName={'COMSATS Islamabad'}
        price={450}
        date={'08/11/2022'} 

        />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: COLORS.white
  },
  headingText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    color: COLORS.dark
  }
})