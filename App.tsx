import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandomCalculation from './components/RandomCalculation';
import CalcSolution from './components/CalcSolution';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <RandomCalculation digitNumbers="2"/> */}
      <CalcSolution solution="3" />
      <CalcSolution solution="3" fake={true}/>
      <CalcSolution solution="3" fake={true}/>
      <CalcSolution solution="3" fake={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
