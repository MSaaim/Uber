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

      <Text style={styles.headingText}>Chatting with Driver</Text>
      <View style={styles.messageBoxPos}>
        <KeyboardAvoidingView style={styles.chatBar}>
          <CustomInput placeholder={'Enter Message'} style={styles.messageBox} />
          <Ionicons name='send' size={30} color={COLORS.orange} />
        </KeyboardAvoidingView>
      </View>

      <View style={styles.dummyChat} >
        <Text style={styles.dummyText}>Hello</Text>
        <Text style={styles.dummyText2}>Where Want to go?</Text>
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
  headingText: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.dark,
    fontWeight: '600',
    marginVertical: 10,
    paddingVertical: 10,

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
    position: 'relative',
    top: 570,

  },
  messageBox: {
    height: 40,
    width: 300,
    backgroundColor: '#e6ecfb',
    borderRadius: 10
  },
  dummyText: {
    backgroundColor: '#deded3',
    textAlign: 'right',
    padding: 10,
    width: 55,
    position: 'relative',
    left: 290,
    marginBottom: 15,
    borderRadius: 10,
    color: COLORS.dark
  },
  dummyText2: {
    backgroundColor: '#deded3',
    textAlign: 'left',
    padding: 10,
    width: 130,
    position: 'relative',
    left: 20,
    marginBottom: 15,
    borderRadius: 10,
    color: COLORS.dark

  }
})