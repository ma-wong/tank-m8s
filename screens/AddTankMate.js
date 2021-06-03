import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, LinearProgress } from 'react-native-elements';
import Dropdown from "../components/Dropdown";
import UserInput from "../components/UserInput";
import Bttn from "../components/Bttn";
import ModalView from '../components/ModalView';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
    //   alignItems: 'center'
    //   marginVertical: 20
    },
    scrollView: {
        marginHorizontal: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10,
        width: 165,
        height: 110,
        margin: 5
    },
    view: {
        alignItems: "center"
    },
    buttonContainer: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },
    buttonText: {
        fontSize: 23
    },
    steps: {
        marginBottom: 20
    },
    text: {
        fontSize: 25,
    }
   
});

class AddTankMate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTank: null,
            tankOptions: [ {value: 1, label: "Tank 1"}, {value: 2, label: "Tank 2"}, {value: 3, label: "Tank 3"} ],
            mateTypes: ["Plant", "Fish", "Amphibian", "Invertebrate"],
            selectedType: "",
            mateName: "",
            species: ""
        }
        this.setSelectedTank = this.setSelectedTank.bind(this);
    }

    setSelectedTank(callback) {
        this.setState(state => ({
          selectedTank: callback(state.selectedTank)
        }), function() {
            console.log(this.state.selectedTank)
        });
    }

    // setItems(callback) {
    //     this.setState(state => ({
    //       items: callback(state.items)
    //     }));
    // }

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
    
    createTankMate = () => {
        var postData = {
            tankId: this.state.selectedTank,
            type: this.state.selectedType,
            name: this.state.mateName,
            species: this.state.species
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
                    <Text style={styles.text}>Step 1:</Text>
                    <Text>Choose a tank to add to</Text>
                </View>

                <Dropdown
                    selectedItem= {this.state.selectedTank}
                    setSelectedValue= {this.setSelectedTank}
                    itemOptions= {this.state.tankOptions}                     
                />
                

                <View>
                    <Text style={styles.text}>Step 2:</Text>
                    <Text >Choose the type of mate</Text>
                </View>

                <View style={styles.buttonContainer}>
                    {this.state.mateTypes.map((elem, index) => {
                        return (
                            <Button
                                onPress={event => this.setSelectedType(event, index)}
                                buttonStyle={styles.button}
                                activeOpacity={.5}
                                title= {elem}
                                type="solid"
                                titleStyle={styles.buttonText}
                            />
                        )
                    })}
                </View>
                

                <View style={styles.steps}>
                    <Text style={styles.text}>Step 3:</Text>
                    <Text>Upload a photo (optional)</Text>
                </View>

                <View>
                    <Text style={styles.text}>Step 4:</Text>
                    <Text>Tell us a little bit about them</Text>
                </View>

                <View style={styles.steps}>
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
                
                <View style={styles.steps}>
                    <ModalView 
                        label= "Add Reminder"
                        fullscreen= {true}
                    />
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