// 3 - Crie uma função que recebe 2 parâmetros e 
//retorna o resultado da divisão entre eles. Além disso, 
//se o resto dessa divisão for zero 
//deverá imprimir no console o valor e dizer que ele é par.

function parOuImpar(numero){

     if(numero %2 ===0) {
        return numero + `O Número ${numero} é par`
    } else if (numero %2 !==0){
        return `O Número ${numero} é ímpar`
    }

}

console.log(parOuImpar(5))