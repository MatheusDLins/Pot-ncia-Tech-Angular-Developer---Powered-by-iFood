

function sayMyName(name){
    console.log('Your name is: ' + name);
}
sayMyName('Matheus');


function quadrado(valor){
    return valor**2;
}
const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez);


function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

// console.log(incrementarJuros(100, 10));

(function (){
    const peso = 80;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


function calcularImc(peso, altura){
    return peso / altura**2;
}

function classificarImc(IMC){
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

