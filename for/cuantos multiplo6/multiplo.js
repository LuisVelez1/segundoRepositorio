let contador = 0;
for (let i = 0; i <= 100; i++){
    if(i %6 === 0){
        contador++;
    }
}
console.log("Hay", contador + " multiplos de 6 entre 0 y 100");