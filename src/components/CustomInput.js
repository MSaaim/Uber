import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

// Variables
import COLORS from '../../src/assets/clrs/Colors'


const CustomInput = ({ value, setValue, placeholder, secureTextEntry, iconName, isEnable = true, autoFocus = false, inputType = 'default', multiline = false, numberofLines = 1, inputStyle, style }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={autoFocus}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[styles.input, styles[`input_${inputStyle}`], style]}
        secureTextEntry={secureTextEntry}
        editable={isEnable}
        keyboardType={inputType}
        multiline={multiline}
        numberOfLines={numberofLines}
        selectionColor={COLORS.secondarylight}

      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    borderRadius: 15,
    paddingHorizontal: 10,

    marginHorizontal: 0,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: "100%",
    paddingHorizontal: 10,
    color: COLORS.theme,
  },
  input_Multiline: {
    textAlignVertical: 'top'
  }
})