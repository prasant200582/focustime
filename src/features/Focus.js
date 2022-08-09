import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus =({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        label = "What would you like to focus on?"
        onChangeText = { setSubject }
      />
      <RoundedButton style={styles.button} size={50} title="+"
      onPress={() => addSubject(subject)}
       />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     //flex: 0.1,
  },
  inputContainer: {
    padding:spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  textInput:{
    flex:1,
    marginRight: 10
  },
  button:{
    justifyContent: 'center',

  }
})