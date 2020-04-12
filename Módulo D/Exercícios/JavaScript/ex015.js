function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('anonasc')
    var res = document.getElementById('res')
    if (anonasc.value > ano || anonasc.value.length == 0) {
        alert("[ERRO]Verifique os dados e tente novamente!")
        console.log(anonasc.value)
        console.log(ano)
    } else {
        var fsex = document.getElementsByName('nsexo')
        var idade = ano - Number(anonasc.value) 
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <=2){
                img.src = '../Imagens/bebemasc.jpg'
            } else if(idade >2 && idade<=12) {
                img.src = '../Imagens/crianmasc.jpg'
            } else if(idade > 12 && idade <= 19){
                img.src = '../Imagens/jovmasc.jpg'
            } else if(idade > 19 && idade <=50) {
                img.src = '../Imagens/adulmasc.jpg'
            } else {
                img.src = '../Imagens/idosmasc.jpg'
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <=2){
                img.src = '../Imagens/bebefem.jpg'
            } else if(idade >2 && idade<=12) {
                img.src = '../Imagens/crianfem.jpg'
            } else if(idade > 12 && idade <= 19){
                img.src = '../Imagens/jovfem.jpg'
            } else if(idade > 19 && idade <=50) {
                img.src = '../Imagens/adulfem.jpg'
            } else {
                img.src = '../Imagens/idosfem.jpg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}