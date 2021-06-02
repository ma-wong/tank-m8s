import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    button: {
      padding: 10,
      width: 200,
      borderRadius: 10,
      backgroundColor: "black"
    }
})


function Bttn({ text , onPress }) {
  return (
    <View>
      
        <Button
            buttonStyle= {styles.button}
            title={text}
            type="solid"
            onPress= {onPress}
        />

    </View>
  );
}

export default Bttn;