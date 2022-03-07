import React, { createContext } from "react";

let defaultValues = {
    calculationVerified: false,
    correctSolution: 0,
    falseSolutions: [],
    difficulty:1,
    calcString:'',
    nextBtnToggle: false,
    setCalcString: (state: string) => {},
    setCalculationVerified: (state: boolean) => {},
    setCorrectSolution: (solution: number) => {},
    setDifficulty: (newDifficulty: number) => {},
    setFalseSolutions: (solutions) => {},
    setNextBtnState: (state: boolean) => {}
}

const CalcContext = createContext(defaultValues);

export default CalcContext ;
