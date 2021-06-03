import React from "react";
import { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
  },
  container: {
    marginVertical: 5
  }
});

function UserInput ({ text, onChangeText, placeholder }) {
  
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        keyboardAppearance= 'dark'
      />
      
    </View>
  );
}

export default UserInput;