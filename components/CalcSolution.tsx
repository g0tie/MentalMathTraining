import React , { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { generateRandomNb, padding } from "../helpers/common";


export default function CalcSolution({ solution , fake = false }) {

  let [backgroundColor, setBackgroundColor] = useState("none");
  let [generatedSolution, setGeneratedSolution] = useState(0);

  function verifySolution(solution :number, currentValue :number) :any
  {

    if (currentValue !== solution) {
      setBackgroundColor("red");
      return false;
    } 

    if (currentValue === solution) {
      setBackgroundColor("green");
      return true;
    }

    setBackgroundColor("none");

    return currentValue !== solution;
  }


  useEffect(() => {
    if (fake) {
      setGeneratedSolution(generateSolution(solution));
    } else {
      setGeneratedSolution(parseInt(solution));
    }
  
  }, [ solution ]);
 
 

  return (
      <TouchableOpacity 
      onPress={() => verifySolution(parseInt(solution), generatedSolution)}>
      <View 
      style={ [styles.container, {backgroundColor: backgroundColor}] } 
      >
        
          <Text style={styles.text}>{ generatedSolution }</Text>
      
      
      </View>
    </TouchableOpacity>
  );
}

function generateSolution(solution :string) :number
{
  const quantityToAddOrSubstract :number = generateRandomNb(10,1);
  let newSolution :number;

  if (generateRandomNb(2) === 1) {
    newSolution = parseInt(solution) - quantityToAddOrSubstract;
  } else {
    newSolution = parseInt(solution) + quantityToAddOrSubstract;
  }


  return newSolution;
}


const styles = StyleSheet.create({
  container: {
    ...padding(10,10,10,10),
    width: 100,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  text: {
    fontSize: "xx-large"
  }
});