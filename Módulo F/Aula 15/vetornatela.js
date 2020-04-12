let valores = [9, 8, 2, 5, 1]

/*for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}*/

//modo mais simples:

for(let pos in valores){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(2))
console.log(valores.indexOf(212))