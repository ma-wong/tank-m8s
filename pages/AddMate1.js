import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';


const styles = StyleSheet.create({
    tankPicker: {
        height: 50,
        width: 200,
        backgroundColor: "white",
        color: "blue"
    }
});

class AddMate1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedValue: "Tank 1"
        }
    }

    render() {
        return (
            <View >
                <Text>
                    Add A Tank Mate
                </Text>
                <Picker
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
                </Picker>
            </View>
        );
    }
}

export default AddMate1;