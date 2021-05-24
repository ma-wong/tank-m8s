import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

function UserInput ({ text, onChangeText, placeholder }) {
  
  return (
    <View>

      <TextInput
        style={styles.input}
        onChange={onChangeText}
        value={text}
        placeholder={placeholder}
      />
      
    </View>
  );
}

export default UserInput;