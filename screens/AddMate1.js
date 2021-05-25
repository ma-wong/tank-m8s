import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Dropdown from "../components/Dropdown";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        marginTop: "1rem"
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: "center"
    }
   
});

class AddMate1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTank: "hello",
            tankOptions: [ {id: 1, name: "Tank 1"}, {id: 2, name: "Tank 2"}, {id: 3, name: "Tank 3"} ],
            // tankOptions: ["Tank 2", "Tank 3", "Tank 4"]
            mateTypes: ["Plant", "Fish", "Amphibian", "Invertebrate"],
            selectedType: ""
        }
    }

    setSelectedTank = (itemValue, itemIndex) => {
        this.setState({
            selectedTank: itemValue
        }, function() {
            console.log(this.state.selectedTank)
        })
    }

    setSelectedType = (event, index) => {
        this.setState({
            selectedType: this.state.mateTypes[index]
        }, () => {
            console.log(this.state.selectedType)
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text>Step 1:</Text>
                    <Text>Choose a tank to add to</Text>

                    <Dropdown
                        selectedItem= {this.state.selectedTank}
                        setSelectedValue= {this.setSelectedTank}
                        itemOptions= {this.state.tankOptions}
                    />
                </View>

                <View>
                    <Text>Step 2:</Text>
                    <Text>Choose the type of mate</Text>

                    {this.state.mateTypes.map((elem, index) => {
                        return (
                            <TouchableOpacity
                                onPress={event => this.setSelectedType(event, index)}
                                style={styles.button}
                            >
                                
                                <Text style={styles.buttonText}>{elem}</Text>
                            
                            </TouchableOpacity>
                        )
                    })}
                </View>


            </View>
        );
    }
}

export default AddMate1;