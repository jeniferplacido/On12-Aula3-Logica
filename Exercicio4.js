// 4 - Utilize a estrutura de repetição for para 
//imprimir no console conforme instruções abaixo: 
// a) números de 1 a 100  
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
// c) quando chegar no número 50 pule a instrução 

for ( let contador = 1; contador <=100; contador++ ) {
    if (contador===50){
      console.log ('PULAR')
      break
    } 
    console.log(contador)
  } 
