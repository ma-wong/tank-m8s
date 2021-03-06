import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, CheckBox} from 'react-native';
import { LinearProgress } from 'react-native-elements';
import UserInput from "../components/UserInput";
import AddReminder from "../components/AddReminder";
import Bttn from "../components/Bttn";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    }
   
});

class AddMate3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mateName: "",
            species: "",
            reminderSelected: false,
            progressVal: .3
        }
    }

    setName = (mateName) => {
        if (this.state.mateName === "") {
            this.setState({
                progressVal: this.state.progressVal+0.15
            })
        }
        this.setState({
            mateName: mateName
        }, () => {
            console.log(this.state.mateName)
        })
    }

    setSpecies = (species) => {
        this.setState({
            species: species
        }, () => {
            console.log(this.state.species)
        })
    }

    setSelection = () => {
        if (this.state.reminderSelected === false) {
            this.setState({
                reminderSelected: true
            })
        }
        else {
            this.setState({
                reminderSelected: false
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
                    <Text>Step 3:</Text>
                    <Text>Upload a photo (optional)</Text>

                    
                </View>

                <View>
                    <Text>Step 4:</Text>
                    <Text>Tell us a little bit about them</Text>
                    
                    <Text>Name</Text>
                    <UserInput
                        text= {this.state.mateName}
                        onChangeText= {this.setName}
                        placeholder= "Chowdie"
                    />

                    <Text>Species</Text>
                    <UserInput 
                        text= {this.state.species}
                        onChangeText= {this.setSpecies}
                        placeholder= "Gold Fish"
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={this.state.reminderSelected}
                        onValueChange={this.setSelection}
                        style={styles.checkbox}
                    />
                    
                    <Text style={styles.label}>Add Reminder</Text>
                </View>
                <View>
                    {this.state.reminderSelected && 
                    <AddReminder 
                    
                    />}
                </View>

                <Bttn 
                    text= "Create Mate"                
                />


            </View>
        );
    }
}

export default AddMate3;