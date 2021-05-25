import React from "react";
import { View, Text } from "react-native";
import UserInput from "../UserInput";
import Dropdown from "../Dropdown";

function AddReminder ({ text }) {
  const [label, onChangeLabel] = React.useState("");
  const [repeatValue, setRepeatValue] = React.useState("Never");
  const repeatOptions = [{id: 1, name: "Never"}, {id: 2, name: "Once a day"}, {id: 3, name: "Once a week"}, {id: 4, name: "Once a month"} ];

  return (
    <View>
      <Text>Time</Text>

      <Text>Label</Text>
      <UserInput 
        onChangeText= {onChangeLabel}
        text={label}
        placeholder="Feed Fish"
      />

      <Text>Repeat</Text>
      <Dropdown
        selectedItem= {repeatValue}
        setSelectedValue= {setRepeatValue}
        itemOptions= {repeatOptions}
      />
    </View>
  );
}

export default AddReminder;