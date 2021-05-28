// 1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, 
// exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".
for ( let contador = 10; contador <=60; contador+=5 ) {
    if (contador===35 || contador === 45){
      console.log ('PULOU')
      continue
    
    }
   console.log(contador)
  } 