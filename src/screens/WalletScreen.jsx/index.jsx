import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WalletScreen = () => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.moneyContainer}>

        <Text style={styles.myAmount}>
          Rs 2500 /-
        </Text>

        <Text style={styles.deductContainer}>
          Rs 500  /- Deducted Without fee
        </Text>

        <View style={styles.transferContainer}>

          <TouchableOpacity onPress={() => { console.warn("Transfer Money Screen Not implemented") }}  >

            <View style={styles.transferBtn}>

              <MaterialCommunityIcons
                name={'bank'}
                size={28}
                color={'#000'}
                style={styles.btnIcon}

              />

              <Text style={styles.transferText}>
                Transfer
              </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { console.warn("Transfer Money Screen Not implemented") }}  >

            <View style={styles.requestBtn}>
              <Entypo
                name={'link'}
                size={28}
                color={'#fff'}
                style={styles.btnIcon}

              />
              <Text style={styles.requestText}>
                Request
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    height: '100%'
  },

  myAmount: {
    padding: 10,
    fontSize: 45,
    color: COLORS.dark,
    fontWeight: '500',
    marginVertical: 50,
    marginLeft: 20
  },

  deductContainer: {
    padding: 5,
    marginLeft: 15

  },

  transferContainer: {
    flexDirection: 'row',
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  transferBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    height: 55,
    width: 150,
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,

  },

  requestBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    height: 55,
    width: 150,
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20
  },

  requestText: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 20
  },
  transferText: {
    color: COLORS.dark,
    fontWeight: 'bold',
    marginLeft: 20
  },

  btnIcon: {
    marginLeft: 20
  }

})