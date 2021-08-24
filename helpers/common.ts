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


export {
    generateRandomNb,
    padding
};