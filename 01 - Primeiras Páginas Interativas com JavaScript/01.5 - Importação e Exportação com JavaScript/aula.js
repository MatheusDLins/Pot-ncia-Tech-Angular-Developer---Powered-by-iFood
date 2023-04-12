// importações para o  exercicio

module.exports = { tabuada, numerosPares, maiorMenor}

function tabuada(numero){
    for (let i = 0; i < 11; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function numerosPares(lista){
    const numerosP = []
    
    for (let i = 0; i < lista.length; i++) {
        if((lista[i] % 2) == 0){
            numerosP.push(lista[i]);
        }
    };

    console.log(numerosP);
}

function maiorMenor(lista){
    let maior = lista[0]
    let menor = lista[0]
    
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > maior){
            maior = lista[i]
        }else if(lista[i] < menor){
            menor = lista[i]
        }
    };
    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
}