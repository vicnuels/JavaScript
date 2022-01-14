// Tipos de dados
/* String
    Cadeia de caracteres

    "" // aspas duplas
        console.log("Olá")
    '' // aspas simples
        console.log('Olá')
    `` // template literals ou template string (permite múltiplas linhas e expressões)
        console.log(`
        ${1}
        ${1+1}
        ${1+1+1}
        Olá
        `)

*/

/* Number
    * números
        * 33 // inteiros
        * 12.5 // reais
    * NaN (Not a Number)
    * Infinity (infinito)

*/
/* Boolean
    * true
        console.log(2>1)
    * false
        console.log(2<1)
*/
/* 
    * Null
        - null é um valor nulo
        - objeto que não tem nada dentro
        - diferente de undefined
    * Undefined
        - undefined é um valor indefinido
*/
/* Object 
    * objeto
        - Propriedades / Atributos
        - Métodos / Funcionalidades
    
    {propriedade: valor}

    console.log({
        nome: "Victor",
        idade: "16 anos",
        andar: function(){
            console.log("Andando")
        }
    })
*/
/* Array
    * Vetores
        - uma lista de dados
        - Agrupamento de dados

    [1,2,3,4,5] // lista 1
    ["Victor", "Maria", "João"] // lista 2
    [1, "Victor", true, {nome: "Victor"}, [1,2,3]] // lista 3
*/

/*
    Conforme o ECMAScript standard temos 9 tipos de dados:
        * Data types
            - Primitive / Primitive types
                # String
                # Number
                # Boolean
                # Undefined
                # Symbol
                # BigInt
            - Structural
                # Object
                    * Array
                    * Map
                    * Set
                    * Date
                    * ...
                # Function
            - Structural Primitive
                # Null
*/