import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from "../components/Dropdown";


// const styles = StyleSheet.create({
//     tankPicker: {
//         height: 50,
//         width: 200,
//         backgroundColor: "white",
//         color: "blue"
//     }
// });

class AddMate1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTank: "hello",
            tankOptions: [ {id: 1, name: "Tank 1"}, {id: 2, name: "Tank 2"}, {id: 3, name: "Tank 3"} ]
            // tankOptions: ["Tank 2", "Tank 3", "Tank 4"]
        }
    }

    setSelectedTank = (itemValue, itemIndex) => {
        this.setState({
            selectedTank: itemValue
        }, function() {
            console.log(this.state.selectedTank)
        })
    }

    
    render() {
        return (
            <View >
                <Text>
                    Add A Tank Mate
                </Text>
                <Dropdown
                    selectedItem= {this.state.selectedTank}

                    setSelectedValue= {this.setSelectedTank}

                    itemOptions= {this.state.tankOptions}

                />
                {/* <Picker
                    selectedValue={this.state.selectedValue}
                    style={styles.tankPicker}
                    onValueChange={
                        (itemValue, itemIndex) => 
                        this.setState({
                            selectedValue: itemValue
                        })
                    }
                >
                    <Picker.Item label="Tank 1" value="tank1" />
                    <Picker.Item label="Tank 2" value="tank2" />
                </Picker> */}
            </View>
        );
    }
}

export default AddMate1;