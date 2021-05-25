import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      
        <TouchableOpacity 
            // onPress={onSubmit}
            style={styles.button}
        >
            <Text style={{ fontSize: 20, color: '#fff' }}>{text}</Text>
        </TouchableOpacity>

    </View>
  );
}

export default Bttn;