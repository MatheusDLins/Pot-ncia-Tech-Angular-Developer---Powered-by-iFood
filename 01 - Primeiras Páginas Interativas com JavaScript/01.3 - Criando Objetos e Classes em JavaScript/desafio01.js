// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;   
    }

    percurso(distancia, precoCombustivel){
        const total = distancia * this.gastoMedio * precoCombustivel;
        console.log(`O total da viagem é de: R$${total.toFixed(2)}`);
    }
}

const palio = new Carro('gol', 'azul', 1/12);

palio.percurso(70,5);




// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc(){
        const IMC = this.calcularImc();
        if(IMC < 18.5){
            return 'Abaixo do peso';
             }
             else if(IMC >= 18.5 && IMC < 25){
                return 'Peso normal';
             }
             else if(IMC >= 25 && IMC < 30){
                return 'Acima do peso';
             }
             else if(IMC >= 30 && IMC < 40){
                return 'Obeso';
             }
             else if(IMC >= 40){
                return 'Obsesidade Grave';
             }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());