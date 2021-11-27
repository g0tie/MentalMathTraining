import React , { useState } from 'react';
import { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { generateRandomNb, executeCalculationString} from "../helpers/common";
import CalcContext from '../contexts/CalcContext';

export default function RandomCalculation({digitNumbers}: any)
{   
    const { correctSolution, setCorrectSolution } = useContext(CalcContext);
    const [calculation, setCalulation] = useState(generateRandomCalculation(digitNumbers));

    useEffect(() => {
        let solution = executeCalculationString(calculation);
        solution && setCorrectSolution(solution);
    }, [ calculation ]);
  
    
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
    let operationType: string = operationTypes[generateRandomNb(operationTypes.length - 1)]


    return `${firstNumber} ${operationType} ${secondNumber}`;
}


let calculationStyle = StyleSheet.create({
    container: {

    },
    placeholder: {
        fontSize: 40
    }
});