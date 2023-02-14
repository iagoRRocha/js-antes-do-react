// ======================================== Rest operator

  // const { name, ...rest } = user;

  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const [first, , third,...rest] = array;

  // document.body.innerText = JSON.stringify({ first, third, rest });


// ======================================== short syntax
  // const name = 'Diego';
  // const age = 27;

  // const user = {
  //   name,
  //   age,
  // };

  // document.body.innerText = JSON.stringify(user)
  
  
// ======================================== Template Literals

// const name = 'Diego';
// const message= `Bem-vindo, ${name ? name : 'Visitante'}`;

// document.body.innerText = message


// ======================================== Promises
// .then/.catch

fetch('https://api.github.com/users/iagoRRocha')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })