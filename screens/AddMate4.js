import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TextInput } from "react-native";
import UserInput from "../components/UserInput";

function AddMate4() {
  const [isSelected, setSelection] = useState(false);
  const [name, onChangeName] = React.useState("");
  const [species, onChangeSpecies] = React.useState("");
  function changeName(name) {
    onChangeName(name);
    console.log(name);
  }

  function changeSpecies (species) {
    onChangeSpecies(species);
    console.log(species);
  }
  return (
    <View style={styles.container}>

    {/* <TextInput
        style={styles.input}
        onChangeText={changeText}
        value={text}
        placeholder="Chowdie"
    /> */}
    <UserInput 
      style={styles.input}
      onChangeText= {changeName}
      text={name}
      placeholder="Chowdie"
    />

    <UserInput 
      style={styles.input}
      onChangeText= {changeSpecies}
      text={species}
      placeholder="Species"
    />

    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
    </View>
    <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default AddMate4;