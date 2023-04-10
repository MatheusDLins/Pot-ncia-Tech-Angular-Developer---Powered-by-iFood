/* Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:
1 - preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro:
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const pEtanol = 4;
const pGasolina = 5;
const tipoCombustivel = 'etanol'
const gastoMedio = 10;
const distanciaEmKm = 100;

const gasto = distanciaEmKm/gastoMedio;

if(tipoCombustivel == 'gasolina'){
    console.log('Preço da viagem é: R$' + gasto * pGasolina);
}
else if(tipoCombustivel == 'etanol'){
    console.log('Preço da viagem é: R$' + gasto * pEtanol);
}
else{
    console.log("Tipo de combustivel invalido!");
}