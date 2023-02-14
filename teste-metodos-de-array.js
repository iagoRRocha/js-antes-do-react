// ======================================== Métodos de aray
  // ======================================== map
    // const array = [1, 2, 3, 4, 5]

    // for (const i of array) {
    //   document.body.innerText += i 
    // }

    // array.forEach(item => {
    //   document.body.innerText += item
    // })

    // const novoArray = array.map(item => {
    //   if (item % 2 == 0) {
    //     return item * 10;
    //   }

    //   return item;
    // })
    // document.body.innerText = JSON.stringify(novoArray)

  // ======================================== filter

    // const novoArray = array
    //   .filter(item => item % 2 !== 0)
    //   .map(item => item * 10)

    // document.body.innerText = JSON.stringify(novoArray)


  // ======================================== every
    // const todosItensSaoNumeros = array.every(item => typeof item === 'number')

    // document.body.innerText = JSON.stringify(todosItensSaoNumeros)

  
  // ======================================== some
    // const peloMenosUmItemNaoEUmNumero = array.some(item => {
    //   return typeof item !== 'number'
    // });
    
    // document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

  
  // ======================================== find
    // const par2 = array.findIndex(item => item % 2 === 0); // retorna o indice do valor
    // const par = array.find(item => item % 2 === 0); // retorna o primeiro valor com as especificações

    // document.body.innerText = JSON.stringify(par)

  
  // ======================================== reduce
    // const soma = array.reduce((acc, item) => {
    //   return acc + item
    // }, 0)

    // document.body.innerText = JSON.stringify(soma)