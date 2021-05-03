/**
 * Buscando e contando dados em arrays
 *
 * contar o número de categorys e o número de livros em cada category
 * contar o numero de autores
 * mostrar livros do autor Augusto Cury
 * transformar em função que recebe o nome do autor e devolve os livros deste autor.
 */

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionaria',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

// total de categorias
const totalCategories = booksByCategory.length;
console.log('Total de categorias:', totalCategories);

// Contagem de livros por categoria
for (const category of booksByCategory) {
    console.log(
        `Total de livros da categoria ${category.category}:`,
        category.books.length
    );
}

// Contagem de autores
function countAuthors() {
    const authors = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if (!authors.includes(book.author)) {
                authors.push(book.author);
            }
        }
    }
    console.log('Total de autores:', authors.length);
}
countAuthors(booksByCategory);

// Seria possivel usar o flatMap para criar um array com todos os livros
// const books = categoria => categoria.books;
// console.log(booksByCategory.map(books));
// console.log(booksByCategory.flatMap(books));

// Livros por autor
function booksOfAuthor(author) {
    const books = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if (book.author.includes(author)) {
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(', ')}`);
}
booksOfAuthor('Cury', booksByCategory);
