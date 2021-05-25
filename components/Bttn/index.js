import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: "black",
        borderRadius: 20

    }
})
function Bttn({ onSubmit, text }) {
  return (
    <View>
      
        <TouchableHighlight 
            // onPress={onSubmit}
            style={styles.button}
        >
            <Text style={{ fontSize: 20, color: '#fff' }}>{text}</Text>
        </TouchableHighlight>

    </View>
  );
}

export default Bttn;