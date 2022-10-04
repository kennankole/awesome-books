import { BookClass } from "./modules/add-book.js";
import { showBooks } from "./modules/show-books.js";
import { showDate } from "./modules/date.js";

const formContainer = document.getElementById('form')

const bookShow = document.getElementById('book-show');
const bookNew = document.getElementById('book-new');
const showContact = document.getElementById('show-contact');

const btnMethod = new BookClass(title, author);

formContainer.addEventListener('submit', (e) => {
	e.preventDefault();
	btnMethod.add();
});

if (localStorage.getItem('StorageBooks') !== null) {
  showBooks()
} else {
  localStorage.setItem('StorageBooks', JSON.stringify(btnMethod.bookList));
}

setInterval(showDate, 1000);

bookShow.addEventListener('click', (even) => {
	even.preventDefault();
	document.getElementById('book-add').style.display = 'none';
	document.getElementById('book-list').style.display = 'block';
	document.getElementById('contact').style.display = 'none';
});

// // add Book
bookNew.addEventListener('click', (even) => {
	even.preventDefault();
	document.getElementById('book-add').style.display = 'flex';
	document.getElementById('book-list').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
});

// // Contact
showContact.addEventListener('click', (even) => {
	even.preventDefault();
	document.getElementById('book-add').style.display = 'none';
	document.getElementById('book-list').style.display = 'none';
	document.getElementById('contact').style.display = 'flex';
});