import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, CheckBox } from 'react-native';
import { Button, LinearProgress } from 'react-native-elements';
import Dropdown from "../components/Dropdown";
import UserInput from "../components/UserInput";
import AddReminder from "../components/AddReminder";
import Bttn from "../components/Bttn";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
      marginVertical: 20,
    },
    scrollView: {
        marginHorizontal: 20,
        backgroundColor: "pink",
    },
    button: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10,
        // marginTop: "1rem",
        // width: 100,
        flex: 1
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
    },
    view: {
        alignItems: "center"
    },
    leftAlign: {
        textAlign: "left"
    }
   
});

class AddTankMate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTank: 1,
            tankOptions: [ {id: 1, name: "Tank 1"}, {id: 2, name: "Tank 2"}, {id: 3, name: "Tank 3"} ],
            mateTypes: ["Plant", "Fish", "Amphibian", "Invertebrate"],
            selectedType: "",
            mateName: "",
            species: "",
            reminderSelected: false
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
    
    createTankMate = () => {
        var postData = {
            tankId: this.state.selectedTank,
            type: this.state.selectedType,
            name: this.state.mateName,
            species: this.state.species,
            reminder: this.state.reminderSelected
        }
        console.log(postData);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                {/* <LinearProgress 
                    color="black"
                    value={this.state.progressVal}
                    trackColor="white"
                    variant="determinate"
                /> */}
                <View >
                    <Text>Step 1:</Text>
                    <Text>Choose a tank to add to</Text>
                </View>
                <View style={styles.view}>
                    <Dropdown
                        selectedItem= {this.state.selectedTank}
                        setSelectedValue= {this.setSelectedTank}
                        itemOptions= {this.state.tankOptions}
                    />
                </View>
                

                <View>
                    <Text>Step 2:</Text>
                    <Text>Choose the type of mate</Text>
                </View>

                <View style={styles.view}>
                    <View style={{flex: 1, flexDirection: "row"}}>
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

                <View >
                    <Text>Step 3:</Text>
                    <Text>Upload a photo (optional)</Text>
                </View>

                <View>
                    <Text>Step 4:</Text>
                    <Text>Tell us a little bit about them</Text>
                </View>

                <View style={styles.view} >
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
                
                <View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.reminderSelected}
                            onValueChange={this.setSelection}
                            style={styles.checkbox}
                        />
                        
                        <Text style={styles.label}>Add Reminder</Text>
                    </View>
                </View>
                
                <View>
                    {this.state.reminderSelected && 
                    <AddReminder />}
                </View>

                <View style={styles.view} >
                    <Bttn 
                        text= "Create Mate"
                        onPress= {this.createTankMate}     
                    />
                </View>

              </ScrollView>
            </SafeAreaView>
        );
    }
}

export default AddTankMate;