function addNumber(x: number, y: number): number{
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);

//Podemos retornar any ou number | string
function CallToPhone(phone: number | string): any{ 
    return phone;
}

console.log(CallToPhone(989879799));
console.log(CallToPhone("989879799"));


/**
 * função assincrona
 */

async function getDatabase(id: number): Promise<string>{
    return "felipe";
}