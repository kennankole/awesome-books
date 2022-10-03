import { removeButton } from "./remove-books.js";

const bukContainer = document.getElementById('book-list');

export function showBooks(){
  const bookData = JSON.parse(localStorage.getItem('StorageBooks'));
	bookData.forEach((item) => {
		const parentNode = document.createElement('div');
		parentNode.className = 'book-container';
		const paraTag = document.createElement('p');
		paraTag.appendChild(document.createTextNode(`${item.bookAuthor} By ${item.bookAuthor}`));
		const removeBtn = document.createElement('button');
		const removeBtnIndex = bookData.indexOf(item);
		removeBtn.setAttribute('class', 'remove');
		parentNode.setAttribute('id', 'book-info');
		paraTag.setAttribute('class', 'p-tag');
		removeBtn.setAttribute('class', 'close-btn');
		removeBtn.appendChild(document.createTextNode('Remove'));

		removeButton(parentNode, removeBtnIndex, removeBtn, bookData);
		parentNode.append(paraTag, removeBtn);
		bukContainer.append(parentNode);
	})
}

