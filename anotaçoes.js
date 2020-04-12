/*Isso é como se fosse um caderno! Apenas anotarei coisas importantes aqui!!

// ou /*=> Modo de anotação, comentário

window.alert(""): o códio exibe um alerta na tela! Podendo ser simplificado apenas para alert("").

window.confirm(""): o código exibe um alert, onde você pode confirmar ou não uma determinada pergunta. Podendo ser simplificado apenas para confirm("").

window.prompt(""): o código exibe um alert com uma barra para resposta extensa. Podendo ser simplificao para prompt("").

var/let: As variáveis (var) é um código que possui um nome(identificador) e atribui um valor à ele, por meio do sinal "=", que, se usado apenas 1 vez ("="), o lemos como "recebe". Ele, atribui um valor a uma variável. como por exemplo: var nome = Gabriel.Podemos ler isso como: A variável cujo nome é "nome", recebe o valor "Gabriel". E cada vez que a usarmos, ela representará o valor "Gabriel". Para termos uma variável sem valor algum, devemos colocar a palavra "null", após o sinal "=", como por exemplo: var x = null. Usar variáveis para guardar dados!

Os identificadores podem começar com letras, o símbolo $ e também por um _(underline). Não podem começar por números e nem conter espaços(pode ser substituido pelo underline) e também não podem ser palavras reservadas pela linguagem, como function, alert, prompt...!! Mas pode usar números, como por exemplo "carro1109". É possível também usar acento e símbolos: "média"ou "@"
Dicas: Maiúsculas e minúsculas(letras) fazem diferença! Utiizar nomes coerentes para cada variável!

typeof: verifica o tipo primitivo, podendo ser number, string, object...

<!--x--!>: O "x" é um comentário em HTML!

Conversões: 1-Para número: Podemos converter strings para números usando o código Number.parseInt ou também Number.parseFloat, sendo Int(inteiro) e Float(quebrado, com vírgulas.). Podendo simplificar o código apenas para parse.Int/parseFloat.
2-Para strings: Podemos utilizar tanto String(converter), quanto converter.toString().

Template String: Junta um tipo primitivo de forma mais fácil que a concatenação. Requisitos: Usar crase; utilizar a tag ${o que vc quer juntar à string}.

Formatação de strings: Em uma string com o nome "s", podemos também utilizar o "s.length", que me diz a quantidade de letrar contidas na string "s", o "s.toUpperCase()", que todas as letrar contidas na string "s" ficam maiúsculas e também o "s.toLowerCase", que todas as letras contidas na string "s" ficam minúsculas.

document.write e document.writeln: Ambos tem a mesma função, entretanto, o writeln pula uma linha automaticamente, sem o uso da tag "<br/>".s

Formatação de números: Em uma variável cujo nome é "n1", e com o valor 1543.5, a tag "n1.toFixed(x)" mostra a quantidade x(quantidade desejada) de casas decimais(x £ N*). a tag "n1.toLocaleString('pt-BR,{style:'currency', currency:'BRL'})" 

!!MACETE!!=> o valor n1, para a sepração das casas decimais utiliza o ".".Se eu desejar trocar para uma vírgula, usaria essa tag: "n1.toFixed(x).replace{'.', ','}. Na primeira abertura de aspas, deve colocar o que quer substituir e na segunda pelo que quer substituir. 

Sintaxe de Autorreferência: Supondo que haja uma variável n, e eu deseje atribuir vários valores a ela, posso usar uma sintaxe ara diminuir  código, sendo ela diferente em cada operação(x £ R). Soma: n+=x; Subração: n-=x; Multiplicação: n*= x; Divisão: n/=x; Potenciação: n**=x; Resto da divisão n%=x. *Quando a soma ou subtração for apenas de uma unidade*
Soma: pós-incremento(n++) ou pré-incremento(++n); Subtração: pós-incremento(n--) ou pré-incremento(--n).

Operadores relacionais(>; <; >=; <=; ==; !=) sempre terão um valor booleano(true/false)

Operador de Identidade(igualdade restrita): "==="(ler como idêntico). Desigual restrito:"!==".

Operadores Lógicos:"!; &&, ||", significam, respectivamente: negação, conjunção(se eu desejo uma caneta azul e uma vermelha, terei que receber ambas para me satisfazer.) e também disjunção(se eu desejo uma caneta azul OU vermelha, se eu receber apenas uma, ficarei satisfeito, mas se eu receber uma preta, por exemplo, não ficarei satisfeito.).

!!ORDEM DE PREFERÊNCIA OPERADORES!! =>1°-Operadores Aritméticos(Ordem de preferência dos operadores aritméticos: (); **; *; /; %; +/ -. ); 2°-Operadores relacionais; 3°-Operadores Lógicos(Ordem de preferência dos operadores Lógicos: !; &&; ||).

Operadores Ternários: Junta três operandos por meio dos símbolos de "?" e ":". Por exemplo: teste?true:false.
No meio, é indicado o que irá acontecer se o teste for verdadeiro, e no final, o qu irá acontecer se o teste for falso. Por exemplo: média >=7.0?"Aprovado":"Reprovado".

DOM: Document Object Model, é um conjunto de objetos dentro do navegador que dá acesso aos componentes internos do WebSite.

Árvore DOM: => 
    window =>
        location
        document => 
            html => 
                head
                    meta
                    title
                body
                    h1
                    p
                    p
                        strong
                    div
        history

Selecionando elementos: Por Marca, se eu desejar pegar apenas um elemento, colocar "[]" e digitar o número, começando do "0", que seria o primeiro. (getElementsByTagName())[0]; Por ID(getElementById()); Por Nome (getElementsByName()); Por Classe (getElementsByClassName()); Por Selector(querySelctor(div//p//...#o//.id//name)//querySelectorAll()).

Com o códio copiado, se vc quiser copiar o código na sua essência, com negrito e etc, usar a tag "innerHTML",pois o "innerText" copia apenas os textos.

Funções "on" em HTML: Algumas funções que podem aparecer em HTML são : "onclick;onmouseout; onmouseenter..." são funções que podem mudar a interface do conteúdo em que você as direcionou. Como por exemplo : 
<div id="lo" onmouseenter="x()" onmouseout="y()">Oi!</div>
<script>
    var a = document.querySelector('div#lo')
    function x() {
        a.innerHTML = 'Olá!'
    }
    function y() {
        a.innerHTML = 'Não quero falar.'
    }
</script>
Nesse código, a mensagem escrita na div alterará quando eu passar o mouse por cima dela e quando ele sair de cima dela.

!!MACETE!!: Para o código HTML não ficar muito sujo com isso, usaremos a tag em javascript : addEventListener(). Ela reduzirá o código HTML e tornará mais fácil o entendimento sobre o assunto. Como por exemplo:
<div id="lo">Oi!</div>
<script>
    var a = document.querySelector('div#lo')
    a.addEventListener(mouseenter, 'x')
    a.addEventListener(mouseout, 'y')
    function x() {
        a.innerHTML = 'Olá!'
    }
    function y() {
        a.innerHTML = 'Não quero falar.'
    }
</script>
Observamos que a funcionalidade continua a mesma, mas o código não, ele se torna mais fácil de entender. !!OBS!!:Quando usar esse código, retirar das funcionalidades "on", como em "onmouse..." as letras "on" e também colocar as funções criadas em áspas simples. Pois agora estamos trabalhando com JavaScript.

Condições: if/else. 
Condição simples: if(condição){
    true
}
Condição composta: if(condição){
    true
} else {
    false
}

Condição multipla: switch(expressão)(!!OBS!!: Break obrigatório no fim de cada case!!){
    case valor 1:
        valor 1
        break
    case valor 2:
        valor 2
        break
    default(se nenhum dos 2 forem, vai esse)
    break
}

Repetições: Estrutura semelhante às condições. Entretanto,quando a condição proposta  for "true", ao invés de seguir o código,ele fará uma repetição, e, se a condição proposta for "false", ele não fará a condição. A estrutura é: while(significa enquanto)(condição) {
    fazer o que está aqui
}
A estrutura "for", é idêntico ao while, entretanto, ele faz a incrementação dentro da sua condição, como por exemplo:
for(início, teste, incremento){

}. Por exemplo:
for(vezes = 0; vezes<=500; vezes++)
    show('Olá!')
}

Variáveis: Existem dois tipos de variáveis, as variáveis simples(var, let), que armazenam apenas um valor por vez e as compostas(array) que conseguem armazenar vários valores em uma mesma estrutura.
Um array é uma variável qe tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação. Estrutura:
let num = [5,8,4].
           0,1,2(os valores começam por 0 e não por 1!!)
Para acrescentar um valor "x", sem perder os outros, devemso fazer:
num[y] = x. (y deve ser um número onde não existe outro valor!! O num é o nome da variável! )
Ou então, se desejas apenas acrescentar um número na ultima posição, use a tag:
num.push(x).(num == nome da variável!)
Para saber o tamanho do array, é só usar a tag "console.log(num.length)"
Para colocar todos os elementos em ordem crescente usar a tag console.log(num.sort())
Para buscar um valor dentro de um array, usamos a tag num.indexOf(x), sendo, x,o valor que desejas buscar! Se o valor não existir dentro do array, ele vai te retornar -1

Funções: São ações que são chamadas ou ocorrem em decorrência de algum evento. Uma função pode receber parêmetros e retornar um resultado 

Objetos: Declaração: let num {}(as chaves declaram o objeto em uma variável!!). Diferente dos Arrays, podemos nomear os campos onde estão localizados os respectivos atributos!! Exemplo:
let amigo = {nome:'José}, sexo:'M', peso:'85.4', engordar(p){}}. Objetos podem guardar funcionalidades!


FIM!!



?

*/

