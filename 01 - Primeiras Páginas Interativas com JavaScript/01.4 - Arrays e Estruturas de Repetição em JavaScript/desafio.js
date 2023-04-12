// 1) Crie um programa que dado um número imprima a sua tabuada.
function tabuada(numero){
    for (let i = 0; i < 11; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
// tabuada(5);

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

function numerosPares(){
    const numeros = [1,2,3,4,5,6,7,8,9,10];

    const numerosP = []
    
    for (let i = 0; i < numeros.length; i++) {
        if((numeros[i] % 2) == 0){
            numerosP.push(numeros[i]);
        }
    };

    console.log(numerosP);
}

// numerosPares();


// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

function nomesComV(){
    const nomes = ['Vitor', 'Matheus', 'Vitoria', 'Juliana'];

    const nomesV = []
    
    for (let i = 0; i < nomes.length; i++) {
    if(nomes[i][0].toLowerCase() == 'v'){
            nomesV.push(nomes[i]);
        }
    };

    console.log(nomesV);
}

// nomesComV();

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

function numerosP(){
    const numerosI = []
    
    for (let i = 10; i <= 50; i++) {
        if(i % 2 == 0){
            numerosI.push(i);
        }
    };

    console.log(numerosI);
}
// numerosP();

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

function recuperacao(){
    const lista = [2, 7, 3, 8, 10, 4];
    const alunosR = []
    
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] < 5){
            console.log(`O aluno na posição ${i} ficou de recuperação`);
        }
    };
}
// recuperacao();

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]

function maiorNota(){
    const lista = [2, 7, 3, 8, 10, 4];
    let maior = 0
    
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > maior){
            maior = lista[i]
            
        }
    };
    console.log(`O aluno com maior nota tirou: ${maior}`);
}
// maiorNota();
