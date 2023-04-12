class Pessoa  {
    nome;
    idade;

    //O construtor vai garantir que tenha algum valor ao instanciar uma nova instancia
    // constructor(){
    //     this.nome = 'nome.teste';
    //     this.idade = 20;
    // }

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// const vitor = new Pessoa();
// vitor.nome = 'Vitor J Guerra';
// vitor.idade= 25;
const vitor = new Pessoa('Vitor', 20);


// const renan = new Pessoa();
// renan.nome = 'Renan J Paulo';
// renan.idade= 30;
const renan = new Pessoa('Renan', 30);

// console.log(vitor);
// console.log(renan);

vitor.descrever();
renan.descrever();