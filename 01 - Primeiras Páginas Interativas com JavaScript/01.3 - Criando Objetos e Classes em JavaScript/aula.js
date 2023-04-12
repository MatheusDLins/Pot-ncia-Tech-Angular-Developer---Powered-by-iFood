const pessoa = {
    nome: 'Matheus Duarte',
    idade: 21,
    //uma função dentro de um Objeto recebe o nome de 'metodo'
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa)

// pessoa.altura = 1.80;
// delete pessoa.nome;
// console.log(pessoa);

// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo]);



