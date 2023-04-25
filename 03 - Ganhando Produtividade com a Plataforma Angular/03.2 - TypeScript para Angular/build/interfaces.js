"use strict";
//interfaces
const bot1 = {
    id: 1,
    name: "megaman",
};
// const bot2: robot2 = {
// id:1,
//     name: "megaman",
// };
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello";
    }
}
const p = new Pessoa(1, 'matheus');
console.log(p.sayHello());
