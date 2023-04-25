"use strict";
/*
 *Variaveis
 */
//Tipos primitivos: bollean, number, string
let ligado = false;
let nome = "felipe";
let idade = 30;
//tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno; //usado geralmente para funções que não retornam nada só fazem ações
let retornoView = false; //recebe todo tipo de dado
//objeto - sem previsibilidade
let produto = {
    nome: "Matheus",
    cidade: "PE",
    idade: "30",
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 0
};
/**
 * arrays
 */
let dados = ["Matheus", "Juliana", "Luiz"];
let dados2 = ["Matheus", "Juliana", "Luiz"];
let infos = ["felipe", 30, 2, "Carlos"];
/**
 * Tuplas
 */
let boleto = ["Agua conta", 199.90, 3123434];
/**
 * arrays métodos
 */
const numbers = [1, 2, 3, 4, 5];
// forEach: executa uma função para cada elemento do array
numbers.forEach((num) => console.log(num));
// map: cria um novo array com o resultado de uma função aplicada a cada elemento do array original
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
// filter: cria um novo array com todos os elementos que passam em um teste implementado por uma função
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// reduce: reduz o array a um único valor, aplicando uma função acumuladora a cada elemento
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);
// find: retorna o primeiro elemento do array que satisfaz uma condição especificada por uma função
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber);
// every: verifica se todos os elementos do array passam em um teste implementado por uma função
const allNumbersAreEven = numbers.every((num) => num % 2 === 0);
console.log(allNumbersAreEven);
// some: verifica se pelo menos um elemento do array passa em um teste implementado por uma função
const atLeastOneNumberIsEven = numbers.some((num) => num % 2 === 0);
console.log(atLeastOneNumberIsEven);
/**
 * Datas
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
