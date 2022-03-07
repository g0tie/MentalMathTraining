import React , { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CalcContext from '../contexts/CalcContext';
import RandomCalculation from './RandomCalculation';
import CalcSolution from './CalcSolution';
import { generateRandomCalculation } from '../helpers/common';

export default function ExerciseGenerator({}) {
    const { 
        correctSolution, 
        difficulty, 
        calcString, 
        setCalcString, 
        nextBtnToggle,
        setNextBtnState,
        setCalculationVerified
    } = useContext(CalcContext);

    function clearPreviousSettings()
    {
        setCalcString( generateRandomCalculation( difficulty ) );
        setCalculationVerified(false);
        setNextBtnState(false);
    }

    return (
        <View>
            <RandomCalculation />

            {
                generateRandomSolutionPositions(correctSolution)
            }

            {
                nextBtnToggle &&  <Button 
                    onPress={ () =>  clearPreviousSettings()}
                    title="Next ->"
                />
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
                <CalcSolution key={i} solution={correctSolution}/>
            );
        } else {
            calcSolutions.push(
                <CalcSolution key={i} solution={correctSolution} fake={true}/>
            );
        }
    }

    return calcSolutions;
}

