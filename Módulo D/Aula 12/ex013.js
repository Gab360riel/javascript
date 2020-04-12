function show(frase) {
    console.log(frase)
}
var agora = new Date()
var diaSemana = agora.getDay() /*Segunda(1) à Domingo(0)*/
switch(diaSemana)  {
    case 0:
        show('Domingo')
        break
    case 1:
        show('Segunda')
        break
    case 2:
        show('Terça')
        break
    case 3:
        show('Quarta')
        break
    case 4:
        show('Quinta')
        break
    case 5:
        show('Sexta')
        break
    case 6:
        show('Sábado')  
        break
    default:
        show('[ERRO]. Dia inválido')
        break
}