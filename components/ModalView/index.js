import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import AddReminder from "../AddReminder";

const ModalView = ({ label }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title={label} onPress={toggleOverlay} />

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animationType="slide"
        // fullScreen= {true}
        
      >
        <AddReminder 
          toggleOverlay= {toggleOverlay}
        />
        {/* <Text>Hello</Text> */}
      </Overlay>
    </View>
  );
};

export default ModalView;
