function show(frase){
    console.log(frase)
}

var vezes = 0
while(vezes <= 500){
    show('Olá')
    vezes++
}
show(vezes)

vezes = 0
do {
    show('Olá')
    vezes++
} while (vezes <= 500);
show(vezes)
