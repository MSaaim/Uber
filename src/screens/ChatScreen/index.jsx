import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'
import COLORS from '../../assets/clrs/Colors'
import CustomInput from '../../components/CustomInput'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChatScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.messageBoxPos}>
        <KeyboardAvoidingView style={styles.chatBar}>
          <CustomInput placeholder={'Enter Message'} style={styles.messageBox} />
          <Ionicons name='send' size={30} color={COLORS.orange} />
        </KeyboardAvoidingView>
      </View>


    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: COLORS.white
  },
  messageBoxPos: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  chatBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 625,

  },
  messageBox: {
    borderColor: COLORS.dark,
    borderWidth: 1,
    height: 40,
    width: 300,
    backgroundColor: '#e6ecfb',
    borderRadius: 10


  }
})