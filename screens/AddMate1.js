import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, LinearProgress } from 'react-native-elements';
import Dropdown from "../components/Dropdown";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10,
        marginTop: "1rem",
    }
   
});

class AddMate1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTank: "hello",
            tankOptions: [ {id: 1, name: "Tank 1"}, {id: 2, name: "Tank 2"}, {id: 3, name: "Tank 3"} ],
            mateTypes: ["Plant", "Fish", "Amphibian", "Invertebrate"],
            selectedType: "",
            progressVal: 0

        }
    }

    setSelectedTank = (itemValue, itemIndex) => {
        this.setState({
            selectedTank: itemValue
        }, function() {
            console.log(this.state.selectedTank)
        })
        if (this.state.progressVal === 0) {
            this.setState({
                progressVal: this.state.progressVal+0.15
            })
        }
        
    }

    setSelectedType = (event, index) => {
        this.setState({
            selectedType: this.state.mateTypes[index]
        }, () => {
            console.log(this.state.selectedType)
        })
        if (this.state.progressVal < 0.3) {
            this.setState({
                progressVal: this.state.progressVal+0.15
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <LinearProgress 
                    color="black"
                    value={this.state.progressVal}
                    trackColor="white"
                    variant="determinate"
                />
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
                            <Button
                                onPress={event => this.setSelectedType(event, index)}
                                buttonStyle={styles.button}
                                activeOpacity={.5}
                                title= {elem}
                                type="solid"
                            />
                        )
                    })}
                </View>


            </View>
        );
    }
}

export default AddMate1;