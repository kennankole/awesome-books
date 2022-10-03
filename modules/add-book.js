import { showBooks } from "./show-books.js";

const booksContainer = document.getElementById('book-list');

export class BookClass {
    constructor(title, author) {
        this.bookList = [];
        this.title = title;
        this.author = author;
    }

    add() {
        const bookTitle = this.title.value;
        const bookAuthor = this.author.value;
        const bookObj = {
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
        };

        this.bookList.push(bookObj);
        localStorage.setItem('StorageBooks', JSON.stringify(this.bookList));
        booksContainer.innerText = '';
        showBooks();
        this.title.value = '';
        this.author.value = '';
    }
}
