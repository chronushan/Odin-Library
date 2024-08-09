const myLibrary = [];

function Book(author, title, pages, status) {
	// Book object constructor
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary(book) {
	// Add book to library array
	myLibrary.push(book);
}

function displayBookToLibrary(myLibrary) {
	for (const books of myLibrary) {
		for (const prop in books) {
			console.log(books[prop]);
		}
	}
}

const Harry = new Book("Harry Potter", "J.K Rowling", 300, "read");

addBookToLibrary(Harry);

displayBookToLibrary(myLibrary);
