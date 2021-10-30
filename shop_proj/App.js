import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity } from 'react-native';
import Welcome from './screens/welcome';


export default function App() {
  return (
    <View style={styles.container}>
     
     <Welcome />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  


});
