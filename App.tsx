import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcContext from './contexts/CalcContext';
import ExerciseGenerator from './components/ExerciseGenerator';

export default function App() {
  const [calculationVerified, setCalculationVerified] = useState(false);
  const [correctSolution, setCorrectSolution] = useState(0);
  const [difficulty, setDifficulty] = useState(1);


  return (
    <CalcContext.Provider value={{
      calculationVerified,
      setCalculationVerified,
      correctSolution,
      setCorrectSolution,
      difficulty,
      setDifficulty
    }}>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <StatusBar style="auto" />
        <ExerciseGenerator />
      </View>
    </CalcContext.Provider>
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
