// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.


const books = [
    {
        title: "Book 1",
        author: "Author 1",
        year: 1839
    },
    {
        title: "Book 2",
        author: "Author 2",
        year: 2000
    },
    {
        title: "Book 3",
        author: "Author 3",
        year: 2007
    },
    {
        title: "Book 4",
        author: "Author 4",
        year: 2012
    },
    {
        title: "Book 5",
        author: "Author 5",
        year: 2019
    },
    {
        title: "Book 6",
        author: "Author 6",
        year: 2020
    }
];

const filtered = [];

const filteredBooks = books.filter((book) => book.year > 2010).map((book) => {
    let obj = {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
    };
    filtered.push(obj);
});

console.log(filtered);