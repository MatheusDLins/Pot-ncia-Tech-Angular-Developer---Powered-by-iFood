
const alunos = ['João', 'Victor', 'Marina'];

// alunos.push('Renan');

// alunos[2] = 'Vinícius'

//deleta a ultima posição
// console.log(alunos.pop());

// //delete o primeiro
// console.log(alunos.shift());

// console.log(alunos);

const notas = [];

notas.push(5);
notas.push(6);
notas.push(7);
notas.push(4);
notas.push(5);

// console.log(notas.length);

let total = 0;

for (let i = 0; i < notas.length; i++) {
    total += notas[i]; 
}

console.log(total/notas.length);