function generateRandomNb(limit: number, start :number = 1): number
{
    return Math.floor(Math.random() * limit) + start;
}

function padding(top :number, right :number, bottom :number, left:number) :object {
    return {
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left
    }
}

function executeCalculationString(calculation :string)
{
    const regex :object = /\+|-|÷|\x/
    const operator : string = calculation.match(regex)[0];
    const members : number[] = calculation.split(regex).map(el => parseInt(el));

    switch (operator)
    {
        case '+':
        return members[0] + members[1];

        case '-':
        return members[0] - members[1];

        case '÷':
        return members[0] / members[1];

        case 'x':
        return members[0] * members[1];

    }
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

export {
    generateRandomNb,
    padding,
    executeCalculationString,
    generateRandomCalculation
};