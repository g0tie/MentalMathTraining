import { createContext } from "react";

let defaultValues = {
    calculationVerified: false,
    correctSolution: 0,
    difficulty:1,
    setCalculationVerified: (state: boolean) => {},
    setCorrectSolution: (solution: number) => {},
    setDifficulty: (newDifficulty: number) => {}
}

const CalcContext = createContext(defaultValues);

export default CalcContext ;
