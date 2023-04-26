class Age{
    dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }

    calculateAge(){
        const hoje: Date = new Date();
        const dataNasc: Date = this.dataNascimento;
        let idade: number = hoje.getFullYear() - dataNasc.getFullYear();
        const mesAtual: number = hoje.getMonth() + 1;
        const mesNasc: number = dataNasc.getMonth() + 1;
        if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        return idade;
        
    }
    
}

const dia1 = new Date("1994-01-13")
const dia2 = new Date("1991-02-26")
const dia3 = new Date("1989-04-10")

const pessoa1 = new Age(dia1);
const pessoa2 = new Age(dia2);
const pessoa3 = new Age(dia3);

console.log(`pessoa1 tem ${pessoa1.calculateAge()} anos`);
console.log(`pessoa2 tem ${pessoa2.calculateAge()} anos`);
console.log(`pessoa3 tem ${pessoa3.calculateAge()} anos`);