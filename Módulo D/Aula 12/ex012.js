function show(frase) {
    console.log(frase)
}
var agora = new Date()
var hora = agora.getHours()
show(`Agora são ${hora} horas `)
if (hora <12) {
    show('Bom dia')
}
else if(hora < 18 ){
    show('Boa tarde')
} 
else {
    show('Boa noite')
}