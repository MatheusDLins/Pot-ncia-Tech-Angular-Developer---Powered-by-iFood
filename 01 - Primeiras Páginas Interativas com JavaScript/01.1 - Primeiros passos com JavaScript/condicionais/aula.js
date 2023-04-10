
const numero = 10;

const NumeroPar = (numero % 2) === 0;

if(NumeroPar && numero != 0) {
    console.log('É par');
} 
else if (numero === 0){
    console.log('Número é zero');
}
else{
    console.log('É impar');
}