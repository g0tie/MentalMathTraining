import React , { useState } from 'react';
import { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcContext from '../contexts/CalcContext';
import RandomCalculation from './RandomCalculation';
import CalcSolution from './CalcSolution';

export default function ExerciseGenerator({}) {
      const { correctSolution, difficulty } = useContext(CalcContext);

    return (
        <View>
            <RandomCalculation digitNumbers={difficulty}/>

            {/* <CalcSolution solution={correctSolution} />
            <CalcSolution solution={correctSolution} fake={true}/>
            <CalcSolution solution={correctSolution} fake={true}/>
            <CalcSolution solution={correctSolution} fake={true}/> */}
            {
                generateRandomSolutionPositions(correctSolution)
            }
        </View>
    )
}

function generateRandomSolutionPositions(correctSolution: number)
{
    let correctSolutionPosition =  Math.floor(Math.random() * 4);
    let calcSolutions = [];

    for (let i = 0; i < 4; i++) {

        if (i === correctSolutionPosition) {
            calcSolutions.push(
                <CalcSolution solution={correctSolution}/>
            );
        } else {
            calcSolutions.push(
                <CalcSolution solution={correctSolution} fake={true}/>
            );
        }
    }

    return calcSolutions;
}
