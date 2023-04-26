function addNumber(x: number, y: number): number{
    return x + y;
}

let soma: number = addNumber(4, 7);

// console.log(soma);

//Podemos retornar any ou number | string
function CallToPhone(phone: number | string): any{ 
    return phone;
}

// console.log(CallToPhone(989879799));
// console.log(CallToPhone("989879799"));


/**
 * função assincrona
 * Essas funções são usadas principalmente quando você precisa fazer uma operação de rede, como fazer uma solicitação HTTP
 */

async function getDatabase(id: number): Promise<string>{
    return "felipe";
}

// Função assíncrona que aguarda um certo tempo antes de retornar um número aleatório
async function numeroAleatorio(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 100);
        resolve(num);
      }, 1000); // espera 1 segundo antes de retornar o número
    });
  }
  
  // Função assíncrona que executa a função númeroAleatorio() várias vezes e imprime o resultado
  async function executar() {
    for (let i = 0; i < 5; i++) {
      const num = await numeroAleatorio();
      console.log(`Número aleatório: ${num}`);
    }
  }
  
  // Chamada da função executar()
  executar();
  