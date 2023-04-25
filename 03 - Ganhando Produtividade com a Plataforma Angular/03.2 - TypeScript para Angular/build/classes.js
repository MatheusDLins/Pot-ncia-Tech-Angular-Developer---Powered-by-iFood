"use strict";
//classes
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1);
class Age {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    calcularIdade() {
        const hoje = new Date();
        const dataNasc = this.dataNascimento;
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const mesNasc = dataNasc.getMonth() + 1;
        if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        return idade;
    }
}
const dia1 = new Date("1994-01-13");
const dia2 = new Date("1991-02-26");
const dia3 = new Date("1989-04-10");
const pessoa1 = new Age(dia1);
const pessoa2 = new Age(dia2);
const pessoa3 = new Age(dia3);
console.log(`pessoa1 tem ${pessoa1.calcularIdade()} anos`);
console.log(`pessoa2 tem ${pessoa2.calcularIdade()} anos`);
console.log(`pessoa3 tem ${pessoa3.calcularIdade()} anos`);
