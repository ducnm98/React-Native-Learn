/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeaders}>SIGN IN</Text>
        </View>
        <View style={styles.signIn} />
        <View style={styles.body}>
          <View style={styles.inputfields}>
            <Text style={styles.inputText}>Username: </Text>
            <TextInput style={styles.input} placeholder="name@gmail.com" />
          </View>
          <View style={styles.signIn} />
          <View style={styles.inputfields}>
            <Text style={styles.inputText}>Password: </Text>
            <TextInput style={styles.input} placeholder="*******" />
          </View>
          <View style={styles.fixToText}>
            <Button title="SIGN IN" color="#ababab" />  
          </View>
        </View>
        <View style={styles.footer}>
          <Button title="SIGN IN VIA FACEBOOK" color="#ababab" />
          <View style={styles.signIn} />
          <Button title="SIGN UP" color="#ababab" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 2,
    flexDirection: "column",
  },
  footer: {
    margin: 20,
    color: "black"
  },
  signIn: {
    marginBottom: 10,
    paddingBottom: 10
  },
  fixToText: {
    flexDirection: "row-reverse",
    justifyContent: 'space-between',
    margin: 20
  },
  header: {

  },
  textHeaders: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8a8a8a',
    marginTop: 20,
  },
  inputfields: {
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row"
  },
  inputText: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    flex: 4
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
