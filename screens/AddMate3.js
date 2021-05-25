import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import UserInput from "../components/UserInput";


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

class AddMate3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mateName: "",
            species: ""
        }
    }

    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, function() {
            console.log(this.state.mateName)
        })
    };

    render() {
        return (
            <View style={styles.container}>
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
                        onChangeText= {this.handleInputChange}
                        placeholder= "Chowdie"
                        name="mateName"
                    />

                    <Text>Species</Text>
                    <UserInput 
                        text= {this.state.species}
                        onChangeText= {this.handleInputChange}
                        placeholder= "Gold Fish"
                        // name="species"
                    />
                </View>


            </View>
        );
    }
}

export default AddMate3;