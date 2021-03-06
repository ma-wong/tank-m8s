import React from "react";
import { View, Text, Switch, StyleSheet} from "react-native";
// import TimePicker from 'react-time-picker';
// import DateTimePicker from 'react-datetime-picker'
// import 'react-clock/dist/Clock.css';
// import TimePicker from 'react-time-picker/dist/TimePicker.css';
import UserInput from "../UserInput";
import Dropdown from "../Dropdown";
import { FAB, Button } from 'react-native-elements';


function AddReminder ({ toggleOverlay }) {
  const [label, onChangeLabel] = React.useState("");
  const [repeatValue, setRepeatValue] = React.useState("Never");
  const [snooze, setSnooze] = React.useState(false);
  const [time, setTime] = React.useState('');

  const repeatOptions = [{value: 1, label: "Never"}, {value: 2, label: "Once a day"}, {value: 3, label: "Once a week"}, {value: 4, label: "Once a month"} ];
  
  const toggleSnooze = () => setSnooze(previousState => !previousState);

  function saveReminder() {
    let postData = {
      name: label,
      repeat: repeatValue,
      snooze: snooze,
      dateTime: time
    }
    toggleOverlay();
    console.log(postData);
  }

  return (
    <View>

      <Text>Time</Text>
      {/* <DateTimePicker
        onChange={setTime}
        value={time}
        disableClock={true}
        hourPlaceholder="00"
        minutePlaceholder="00"
        autoFocus={true}
        dayPlaceholder = "dd"
        monthPlaceholder = "mm"
        yearPlaceholder = "yyyy"
      /> */}

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

      <FAB 
        title="Save" 
        color= "green"
        onPress= {saveReminder}
        size= "small"
      />
      
    </View>
  );
}

export default AddReminder;


const styles = StyleSheet.create({
  button: {
   borderColor: "red"

  }
 
});