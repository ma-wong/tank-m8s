import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddMate1 from "./screens/AddMate1";
import Home from "./screens/Home";
import AddMate3 from "./screens/AddMate3";
import AddTankMate from "./screens/AddTankMate";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen
          name="Home"
          component={Home}
        />
        {/* <Tab.Screen
          name="Add Mate 1"
          component={AddMate1}
        />
        <Tab.Screen
          name="Add Mate 3/4"
          component={AddMate3}
        /> */}
        <Tab.Screen
          name="Add A Tank Mate"
          component={AddTankMate}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     color: 'white'
//   }
// });

export default App;
