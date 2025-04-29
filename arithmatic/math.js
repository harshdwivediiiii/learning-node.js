// Addition


function add(a, b) {
    return a + b;
    
}

console.log(add(2, 3)); 

// Subtraction

function subtract(a, b) {
    return a - b;
}   

console.log(subtract(5, 3));

// Multiplication

function multiply(a, b) {
    return a*b;
}

console.log(multiply(2, 3));

// Division

function divide(a, b) {
    return a/b;
}

console.log(divide(6, 3));

//percentage

function percentage (a,b) {
    return a/b * 100;
}

console.log(percentage(1,4));

//power(exponentiation)

function power(a,b) {
    return a**b;
}

console.log(power(2,3));

//Square root

function squareroot(a){
    return Math.sqrt(a);
}

console.log(squareroot(25));

//Cube root

function cuberoot(x){
    return Math.cbrt(x)
}

console.log(cuberoot(64));

//Average

function Average(a,b,c,d){
    return a+b+c+d/2;
}

console.log(Average(5,7,9,10));

module.exports ={
    add,
    subtract,
    multiply,
    divide,
    power,
    squareroot,
    cuberoot,
    Average
          
}