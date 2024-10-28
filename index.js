/*Potencia*/

function potencia(num,pot){
  if (pot===1)
    return num 
  return num *potencia(num,pot-1)
}

console.log(potencia(3,7))

/*facotorial*/

function factorial (num){
  if(num === 1)
    return num 
  return num * factorial(num-1)
}

console.log(factorial(10))

//fibonacci

function fibonacci(num){
  if (num<=1)
    return console.log(num)
  num = fibonacci(num-1) + fibonacci(num-2)
  return num 
}

fibonacci(22)