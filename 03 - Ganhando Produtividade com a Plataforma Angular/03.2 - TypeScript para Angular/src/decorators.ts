/**
 * Imagine que você tem uma classe Carro, que possui um método acelerar() e 
 * você quer adicionar um comportamento adicional a este método, 
 * como por exemplo imprimir uma mensagem no console toda vez que ele é chamado.
  Usando um decorator, você pode fazer isso sem precisar modificar o 
  código original do método. O código abaixo mostra como isso pode ser feito:

 */


function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`Chamando o método ${propertyKey} com argumentos: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Resultado do método ${propertyKey}: ${JSON.stringify(result)}`);
      return result;
    }
    return descriptor;
  }
  
  class Carro {
    @log
    acelerar() {
      console.log('Acelerando...');
    }
  }
  
  const carro = new Carro();
  carro.acelerar(); // imprime "Chamando o método acelerar com argumentos: []" e "Acelerando..." e "Resultado do método acelerar: undefined" no console.
  