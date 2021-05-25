import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddMate1 from "./screens/AddMate1";
import Home from "./screens/Home";
import AddMate3 from "./screens/AddMate3";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Hammy is stinky and smelly. My Chowdie bears is also smelly</Text>
    //   <StatusBar style="auto" />
    //   <AddMate1 />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Add A Tank Mate"
          component={AddMate1}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
        /> */}
        {/* <Stack.Screen
          name="Add Mate 3/4"
          component={AddMate3}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

export default App;
