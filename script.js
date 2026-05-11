let body = document.querySelector("body");

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

Book.prototype.toggleStatus = function () {
	let toggleBtn = document.createElement("button");
	toggleBtn.addEventListener("click", function (event) {
		// document.querySelector()
	});
	body.appendChild(toggleBtn);
};

function addBookToLibrary(title, author, status) {
	let newBook = new Book(title, author, status);
	myLibrary.push(newBook);
}

function displayBook(arr) {
	for (book of arr) {
		let card = document.createElement("div");
		card.classList.add("card");
		let title = document.createElement("p");
		title.textContent = book.title;
		let author = document.createElement("p");
		author.textContent = book.author;
		let status = document.createElement("p");
		if (book.status) {
			status.textContent = "Read";
		} else {
			status.textContent = "Not read";
		}

		card.append(title, author, status);
		body.appendChild(card);
	}
}

displayBook(myLibrary);

let newBookBtn = document.querySelector("#addBook");

newBookBtn.addEventListener("click", (e) => {
	let title = document.querySelector("#newTitle").value;
	let author = document.querySelector("#newAuthor").value;
	let status;
	if (document.querySelector("#newStatusRead").checked) {
		status = true;
	} else {
		status = false;
	}
	addBookToLibrary(title, author, status);
	document.querySelector("#newTitle").value = "";
	document.querySelector("#newAuthor").value = "";
	document.querySelector("#newStatusRead").checked = true;
	document.querySelector("#popup").close();
	displayBook(myLibrary);
});
