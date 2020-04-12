function soma(n1=0, n2=0) {
    if(n1+n2>=0){
        console.log(`A soma produziu o número ${n1+n2}, que é positivo que faz parte dos N`)
    }else{
        console.log(`A soma produziu o número ${n1+n2}, que é negativo que faz parte dos inteiros`)
    }
    return n1+n2
}

soma(2,-7)