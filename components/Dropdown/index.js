import React from "react";
import { View } from "react-native";

import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown( {selectedItem, itemOptions, setSelectedValue } ) {
  const [open, setOpen] = React.useState(false);

  return (
    <View style={{zIndex: 100}}>

      <DropDownPicker
        open={open}
        value={selectedItem}
        items={itemOptions}
        setOpen={setOpen}
        setValue={setSelectedValue}
        // setItems={setItems}
        containerStyle={{
          width: 350,
          marginBottom: 50
        }}
        zIndex={2000}
        maxHeight={100}
      />

    </View>
  );
}

export default Dropdown;