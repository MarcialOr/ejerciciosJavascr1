function cuentaElemento(arre,x){
    contador = 0;
    for(let i = 0; i <= arre.length;i++){
        for(let j = 0; i <= arre.length;j++){
            if(x == arre[i]){
                contador++
            }
        }
    }
    return contador
}
arre6 = [1,2,3,80,5,6,2,15,18,2];
x = 2;
impri6 = cuentaElemento(arre6,x);

console.log(impri6);