//Criar função para classe pessoa para descorbri quem é mais velho

class Pessoa  {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const vitor = new Pessoa('Vitor', 20);

const renan = new Pessoa('Renan', 30);

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`O ${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`O ${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`O ${p2.nome} tem a mesma idade de ${p1.nome}`);
    }
}

compararPessoas(vitor, renan)