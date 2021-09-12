function generateRandomNb(limit: number, start :number = 0): number
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

export {
    generateRandomNb,
    padding,
    executeCalculationString
};