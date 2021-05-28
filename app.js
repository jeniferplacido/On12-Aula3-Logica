
// Crie uma funçao para calcular o IMC

function calcularImc(altura, massa){
    return massa / (altura**2)
}

let imc = calcularImc(1.67, 105)
console.log('Seu imc é:' + ' ' + imc)

// Crie uma função para determinar se um número é par ou ímpar

function parOuImpar(numero){
 if(numero %2 === 0){
 return numero +" " + 'É par'  
} else {
    return numero +" " + ' É impar';
}
}
