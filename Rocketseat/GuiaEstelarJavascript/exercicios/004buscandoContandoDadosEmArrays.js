/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
// Contar o número de categorias e o número de livros em cada categoria

function countCategoriesAndBooks(booksByCategory) {
    let numberOfCategories = booksByCategory.length
    let numberOfBooks = new Array(numberOfCategories)
    for (let category in booksByCategory) {
        numberOfBooks[category] = booksByCategory[category].books.length
    }
    return [numberOfCategories, numberOfBooks]
}

console.log(countCategoriesAndBooks(booksByCategory))
// ou
function showNumberOfCategoriesAndBooks(booksByCategory) {
    console.log(`Número de categorias: ${booksByCategory.length}`)
    for (let category of booksByCategory) {
        console.log(`Categoria: ${category.category} - Livros: ${category.books.length}`)
    }
}

showNumberOfCategoriesAndBooks(booksByCategory)

// Contar o número de autores

function countAuthors(booksByCategory) {
    let authors = []
    for (let category of booksByCategory) {
        for (let book in category.books) {
            let author = category.books[book].author
            if (!authors.includes(author)) {
                authors.push(author)
            }
        }
    }
    return authors.length
}

console.log(`Número de autores: ${countAuthors(booksByCategory)}`)

// Mostrar livros do autor Auguto Cury

function showAugustoCuryBooks(booksByCategory) {
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === "Augusto Cury") {
                console.log(book)
            }
        }
    }
}

showAugustoCuryBooks(booksByCategory)

//  Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function showBooksByAuthor(booksByCategory, author) {
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                console.log(book)
            }
        }
    }
}

showBooksByAuthor(booksByCategory, "Stephen R. Covey")