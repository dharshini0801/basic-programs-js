const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddSquares = numbers.filter((num) => {
        return num % 2 !== 0;   
    })

 const oddsquares = numbers.map((num) => {
    return num * num;
});


console.log(oddSquares);
