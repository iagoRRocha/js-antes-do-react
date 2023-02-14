// ========================================objetos

    const user = {
        name: 'Diego',
        idade: 27,
        nickname: 'Rocha',
        address: {
            street: 'Rua teste',
            number: 176,
        },
    };

    document.body.innerText = ('name' in user);
    document.body.innerText = Object.keys(user);
    document.body.innerText = Object.values(user);
    document.body.innerText = JSON.stringify(Object.values(user));
    document.body.innerText = JSON.stringify(Object.entries(user));

// ========================================Desestruração de Objeto

    const { address, idade: age, nickname = 'Fernandes' } = user
    document.body.innerText = JSON.stringify({ address, age, nickname })

    function mostraIdade(user) {
        return user.idade;
    }

    function mostraIdade({ idade }) {
        return idade
    }

    document.body.innerText = mostraIdade(user);