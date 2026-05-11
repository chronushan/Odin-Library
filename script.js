let myLibrary = [
	{
		title: "Harry Potter",
		author: "J.K. Rowling",
		status: true,
	},
	{
		title: "Green Eggs and Ham",
		author: "Dr. Seuss",
		status: true,
	},
];

function Book(title, author, status) {
	this.title = title;
	this.author = author;
	this.status = status;
}

Book.prototype.toggleStatus = function () {};

function addBookToLibrary(title, author, status) {
	let newBook = new Book(title, author, status);
	myLibrary.push(newBook);
}

addBookToLibrary("helo", "lol", true);
console.log(myLibrary);

function displayBook(arr) {
	for (book of arr) {
		console.log(book.title + " by " + book.author);
	}
}

displayBook(myLibrary);

// let newBook = document.querySelector(".newBook");
// newBook.addEventListener("click", (event) => {
// 	event.preventDefault();
// });
