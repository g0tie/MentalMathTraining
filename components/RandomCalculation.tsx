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
    const { correctSolution, setCorrectSolution } = useContext(CalcContext);
    const { calcString, setCalcString } = useContext(CalcContext);
   
    // calculate string and store in context
    useEffect(() => {
        let solution = executeCalculationString(calcString);
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