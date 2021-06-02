import React from "react";
import { View } from "react-native";

import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown( {selectedItem, itemOptions, setSelectedValue } ) {
  const [open, setOpen] = React.useState(false);

  return (
    <View>

      <DropDownPicker
        open={open}
        value={selectedItem}
        items={itemOptions}
        setOpen={setOpen}
        setValue={setSelectedValue}
        // setItems={setItems}
      />

    </View>
  );
}

export default Dropdown;