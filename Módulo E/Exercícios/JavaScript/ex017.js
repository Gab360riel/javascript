function calc() {
    var num = document.getElementById('numt')
    var  r = document.getElementById('resp')
    if(num.value.length == 0){
        alert('[ERRO] Digite um valor!')
    }else{
        var n = Number(num.value)
        r.innerHTML = ''
        for(var c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.valor = `r${c}`
            r.appendChild(item)
            

        }
    }
    
}