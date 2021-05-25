import React from "react";
import { View, Picker } from "react-native";

function Dropdown ({ selectedItem, itemOptions, setSelectedValue }) {
  
  return (
    <View>
      <Picker
        selectedItem= {selectedItem}
        style={{ height: 50, width: 150 }}
        onValueChange={setSelectedValue}
      >
        {/* <Picker.Item label="poop" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}

        {itemOptions.map((value) => {
          return (
            <Picker.Item
              key={value.id}
              label={value.name} 
              value={value.id}
            />
          )
        })}
        

      </Picker>
    </View>
  );
}

export default Dropdown;