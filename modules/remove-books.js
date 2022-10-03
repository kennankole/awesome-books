export function removeButton(parentElementNode, btnIndex, rmvBtn, bookData) {
	rmvBtn.addEventListener('click', () => {
			bookData.splice(btnIndex, 1);
			localStorage.setItem('StorageBooks', JSON.stringify(bookData));
			parentElementNode.remove();
			window.location.reload();
	});
}
