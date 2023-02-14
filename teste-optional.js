// ======================================== Optional chaining
  const user = {
    name: 'Diego',
    age: 27,
    address: {
        street: 'Rua teste',
        number: 176,
        zip: {
          code: '899000',
          city: 'Rio do sul',
          
        },
        showFullAddress() {
          return 'ok';
        }
    },
  };

  const key = 'state';

  document.body.innerText = user.address[key]

  document.body.innerText = user.address?.showFullAddress?.()

  document.body.innerText = user.address?.zip?.code ?? 'Não foi informado';

  document.body.innerText = user.address 
    ? user.address.zip 
      ? user.address.zip.code 
      : 'Não informado'
    : 'Não informado';