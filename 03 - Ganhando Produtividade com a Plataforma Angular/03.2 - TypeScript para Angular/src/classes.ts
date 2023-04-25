//classes

class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number){
        this.stregth = stregth;
        this.skill = skill
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
        
    }
}

const p1 = new Character(10, 98);
console.log(p1);


//subclass
class Magician extends Character{
    magicPoints: number
    constructor(stregth: number, skill: number, magicPoints: number){
        super(stregth, skill);
        this.magicPoints = magicPoints;

    }
}

const p2 = new Magician(09, 30, 100);
