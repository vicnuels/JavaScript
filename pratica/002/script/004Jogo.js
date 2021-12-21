var palpite = ( window.prompt("Digite um número de 1 a 5"))

var n1 = Math.round(Math.random() * 4 + 1)

if(palpite == n1){
    document.write("Acertou, parabéns!")
} else{
    document.write("Errou, tente novamente.")
}

