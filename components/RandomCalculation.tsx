import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { generateRandomNb } from "../helpers/common";

export default function RandomCalculation({digitNumbers}: any)
{   
  
    const [calculation, setCalulation] = useState(generateRandomCalculation(digitNumbers));
    
    return (
        <View style={calculationStyle.container}>
            <Text style={calculationStyle.placeholder}> { calculation } </Text>
        </View>
    )
}

function generateRandomCalculation(digitNumbers: number): string
{
    let limit: string = "";
    let operationTypes: string[] = ["+", "x", "÷", "-"];
    
    for (let i = 0; i < digitNumbers; i++) {
        limit += '9';
    }

    let firstNumber: number = generateRandomNb(parseInt(limit));
    let secondNumber: number = generateRandomNb(parseInt(limit));
    let operationType: string = operationTypes[generateRandomNb(operationTypes.length)]


    return `${firstNumber} ${operationType} ${secondNumber}`;
}


let calculationStyle = StyleSheet.create({
    container: {

    },
    placeholder: {
        fontSize: 'xxx-large'
    }
});