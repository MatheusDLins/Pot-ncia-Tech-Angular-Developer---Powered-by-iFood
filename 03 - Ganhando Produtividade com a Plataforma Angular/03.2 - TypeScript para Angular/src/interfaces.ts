//interfaces

type robot = {
    id: number | string;
    name: string;
};

interface robot2{
    id: number | string;
    name: string;
    sayHello(): string;
}


const bot1: robot = {
    id:1,
    name: "megaman",
};

// const bot2: robot2 = {
// id:1,
//     name: "megaman",
// };

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name
    }
    sayHello(): string {
        return "hello";
        
    }
}

const p = new Pessoa(1, 'matheus');
console.log(p.sayHello());