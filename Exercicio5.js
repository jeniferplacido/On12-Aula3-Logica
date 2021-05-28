// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? 

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console
function calculadora ( a, b ){
    let operacao = 'multiplicacao'
     switch (operacao){
         case 'soma':
           return a + b
             break
 
         case 'multiplicacao':
            return a * b
             break
 
         case 'divisao':
            return a / b
           break
 
         case 'subtracao':
           return a - b   
         break
 
           
     }
 }
 console.log(calculadora(20,20 ))