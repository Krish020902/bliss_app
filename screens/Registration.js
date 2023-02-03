import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

export default function Registration() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="enter your email"/>
      <Text style={styles.label}>Number</Text>
      <TextInput style={styles.input} placeholder="enter your number" keyboardType={'phone-pad'}/>
      <Button title='submit'/>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 250
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
      width: 250,
      height: 50
  },
  label:{
    // margin: 10,
    // width: 350,
    // borderWidth: 1,
    // borderWidth: 
  }
});





