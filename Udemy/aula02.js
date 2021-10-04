var variavel = 5; // não muito recomendado
let outraVariavel = 9;
const constante = 34;
//JS é Case-Sensitive. Uma variavel não pode ter acentos e deve começar com uma letra, _ ou $.

/*Tipos de dados
Number
String
Boolean
Array
Null e Underfined
Symbol
Object
Function

*/

// Number: são todos os números reais
let numeroInteiro = 100;
let numeroDecimal = 5.36;
let numeroNegativo = -200.223;

// operadores: +, -, *, /.
let soma = numeroDecimal + numeroInteiro;

//String: volores de texto, cadeias de caracteres.
let texto = "Qualquer texto em aspas duplas";
let texto2 = 'Qualquer texto em aspas simples';

//caracteres especiais (",', &, $, quebra de linha, etc): tem que usar uma barra invertida antes(\);
let caracteresEspeciais = "R\$ 10.00";

//concatenação de strings

let concat = texto1 + texto2;
let concat2 = texto1.conc(texto2);
let concat4 = texto1.conc(texto2, caracteresEspeciais);
let concat5 = `${texto1} ${texto2} ${1+1}`;


// booleanos: dados com apenas dois valore, True e False

let boo = true;

//comparações.
let true2 = 1 ==1;
//comparacão que leva em consideração o valor e o tipo de dado
let true3 = 1 ===1;
let true4 = 1 == "1";
let false1 = 1 === "1";
