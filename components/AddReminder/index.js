import React from "react";
import { View, Text, Switch } from "react-native";
import UserInput from "../UserInput";
import Dropdown from "../Dropdown";

function AddReminder ({ text }) {
  const [label, onChangeLabel] = React.useState("");
  const [repeatValue, setRepeatValue] = React.useState("Never");
  const [snooze, setSnooze] = React.useState(false);

  const repeatOptions = [{id: 1, name: "Never"}, {id: 2, name: "Once a day"}, {id: 3, name: "Once a week"}, {id: 4, name: "Once a month"} ];
  const toggleSnooze = () => setSnooze(previousState => !previousState);

  return (
    <View>
      <Text>Time</Text>

      <Text>Label</Text>
      <UserInput 
        onChangeText= {onChangeLabel}
        text={label}
        placeholder="Feed Piggy"
      />

      <Text>Repeat</Text>
      <Dropdown
        selectedItem= {repeatValue}
        setSelectedValue= {setRepeatValue}
        itemOptions= {repeatOptions}
      />

      <Text>Snooze</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={snooze ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSnooze}
        value={snooze}
      />
    </View>
  );
}

export default AddReminder;