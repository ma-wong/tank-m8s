import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import AddReminder from "../AddReminder";

const ModalView = ({ label }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button style={styles.button} title={label} onPress={toggleOverlay} />

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animationType="slide"
        // fullScreen= {true}
        
      >
        <AddReminder 
          toggleOverlay= {toggleOverlay}
        />
      </Overlay>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  button: {
    width: 150,
  }
})
