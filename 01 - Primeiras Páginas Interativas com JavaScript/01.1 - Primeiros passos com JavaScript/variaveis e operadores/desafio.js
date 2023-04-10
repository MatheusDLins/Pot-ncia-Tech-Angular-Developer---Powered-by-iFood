/*

Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem:

Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/

console.log('Iniciando desafio!');

const precoLitro = 5;
const KMporLitro = 10;
const distanciaEmKM = 100;

let valorTotal = (distanciaEmKM / KMporLitro * precoLitro);

console.log('O total da viagem foi: R$' + valorTotal.toFixed(2));