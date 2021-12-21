var i = 1
while(i <= 100){
    document.write(i + ", ")
    i++
}
document.write("<br> <br> <br>")

var n1 = window.prompt("Digite um número")
var j = 1
var fat = 1
while( j <= n1){
    fat *= j 
    j++
}

document.write("O fatorial é: " + fat)
