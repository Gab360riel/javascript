function show(frase) {
    console.log(frase)
}
function mostrar(ff) {
    document.write(ff)
}

function calcular() {
    var ni = document.getElementById('nin')
    var nf = document.getElementById('nfim')
    var passo = document.getElementById('npasso')
    var res = document.querySelector('div#res')

    if(ni.value.length == 0 || nf.value.length == 0 || passo.value.length ==0){
        res.innerHTML = `Impossível contar.`
    }else{
        res.innerHTML = `Contando: <br/>`
        let i = Number(ni.value)
        let f = Number(nf.value)
        let p = Number(passo.value)
        if( p<=0){
            alert('[ERRO]Passo inválido, condirerando o passo 1!')
            p = 1
        }
        
        //contagem progressiva
        if(i < f){
            for(let c = i; c<=f; c+=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        //contagem regressiva
        }else{
            for(let c = i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }




}

