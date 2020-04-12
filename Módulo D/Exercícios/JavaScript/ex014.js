function carregar () {
    
    var msg = document.querySelector('div#msg')
    
    var img = document.getElementById('img1')
    
    var data =  new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //Bom dia
        document.body.style.background = '#6a727d' 
        img.src = "../Imagens/fotomanha.jpg"
    } else if(hora >= 12 && hora < 18) {
        //Boa tarde
        document.body.style.background = '#d39444'
        img.src = "../Imagens/fototarde.jpg"
    }else{
        //Boa noite
        document.body.style.background = '#091e3b'
        img.src = "../Imagens/fotonoite.jpg"
    }

}

