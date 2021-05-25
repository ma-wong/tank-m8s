import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: "13rem",
        borderRadius: 10,
        backgroundColor: "black"
    }
})


function Bttn({ onSubmit, text }) {
  return (
    <View>
      
        <Button
            buttonStyle= {styles.button}
            title={text}
            type="solid"
        />

    </View>
  );
}

export default Bttn;