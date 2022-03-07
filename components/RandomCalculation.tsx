import React , { useState } from 'react';
import { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
    generateRandomNb, 
    executeCalculationString,
    generateRandomCalculation
} from "../helpers/common";
import CalcContext from '../contexts/CalcContext';

export default function RandomCalculation()
{   
    const { 
        calcString, 
        setCalcString, 
        difficulty, 
        correctSolution, 
        setCorrectSolution 
    } = useContext(CalcContext);
   
    // calculate string and store in context
    useEffect(() => {
        let solution = executeCalculationString(calcString) ?? 0;

        //check if solution is decimal number or not
        if (Math.floor(solution) !== solution) {
            setCalcString(generateRandomCalculation(difficulty));
            solution = executeCalculationString(calcString) ?? 0;
        }

        solution && setCorrectSolution(solution);

    }, [calcString]);

  
    // display calculation string
    return (
        <View style={calculationStyle.container}>
            <Text style={calculationStyle.placeholder}> { calcString } </Text>
        </View>
    )
}


let calculationStyle = StyleSheet.create({
    container: {

    },
    placeholder: {
        fontSize: 40
    }
});