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
            <CalcSolution solution={correctSolution} />
            <CalcSolution solution={correctSolution} fake={true}/>
            <CalcSolution solution={correctSolution} fake={true}/>
            <CalcSolution solution={correctSolution} fake={true}/>
        </View>
    )
}