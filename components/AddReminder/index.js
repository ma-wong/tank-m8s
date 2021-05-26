import React from "react";
import { View, Text, Switch, StyleSheet} from "react-native";
// import TimePicker from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker'
// import 'react-clock/dist/Clock.css';
// import TimePicker from 'react-time-picker/dist/TimePicker.css';
import UserInput from "../UserInput";
import Dropdown from "../Dropdown";
import { Button } from 'react-native-elements';


function AddReminder ({ text }) {
  const [label, onChangeLabel] = React.useState("");
  const [repeatValue, setRepeatValue] = React.useState("Never");
  const [snooze, setSnooze] = React.useState(false);
  const [time, setTime] = React.useState('');

  const repeatOptions = [{id: 1, name: "Never"}, {id: 2, name: "Once a day"}, {id: 3, name: "Once a week"}, {id: 4, name: "Once a month"} ];
  
  const toggleSnooze = () => setSnooze(previousState => !previousState);
  
  function consoleDate() {
    console.log(time);
  }
  return (
    <View>

      <Text>Time</Text>
      <DateTimePicker
        onChange={setTime}
        value={time}
        disableClock={true}
        hourPlaceholder="00"
        minutePlaceholder="00"
        autoFocus={true}
      />
      
      <Button
        buttonStyle= {styles.button}
        title="hello"
        type="solid"
        onPress={consoleDate}
      />

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


const styles = StyleSheet.create({
  timePicker: {
    color: "blue"
  }
 
});