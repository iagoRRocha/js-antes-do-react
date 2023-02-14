// ======================================== Nullish Coalescing Operator

    const idade = 0;

    //0, '', [], false, undefined, null => falsy

    document.body.innerText = 'Sua idade é: ' + (idade || 'não informado'); //o '||' não considera o 0 como um valor
    document.body.innerText = 'Sua idade é: ' + (idade ?? 'não informado'); //o '??' só não considera o nullo, undefined ou qualquer valor que não seja um valor
