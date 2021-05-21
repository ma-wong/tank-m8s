import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddMate1 from "./pages/AddMate1";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hammy is stinky and smelly. My Chowdie bears is also smelly</Text>
      <StatusBar style="auto" />
      <AddMate1 />
    </View>
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



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hammy is stinky and smelly. My Chowdie bears is also smelly</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     color: 'white'
//   }
// });
