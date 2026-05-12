let body = document.querySelector("body");

let myLibrary = [
	{
		title: "Harry Potter",
		author: "J.K. Rowling",
		status: true,
		id: crypto.randomUUID(),
	},
	{
		title: "Green Eggs and Ham",
		author: "Dr. Seuss",
		status: true,
		id: crypto.randomUUID(),
	},
];

function Book(title, author, status, id) {
	this.title = title;
	this.author = author;
	this.status = status;
	this.id = id;
}

Book.prototype.toggleStatus = function () {
	let toggleBtn = document.createElement("button");
	toggleBtn.addEventListener("click", function (event) {
		// document.querySelector()
	});
	body.appendChild(toggleBtn);
};

function addBookToLibrary(title, author, status, id) {
	let newBook = new Book(title, author, status, id);
	myLibrary.push(newBook);
}

function displayBook(arr) {
	document.querySelectorAll(".card").forEach((a) => a.remove());
	for (book of arr) {
		let card = document.createElement("div");
		card.classList.add("card");
		let title = document.createElement("p");
		title.textContent = "Title: " + book.title;
		let author = document.createElement("p");
		author.textContent = "Author: " + book.author;
		let status = document.createElement("p");
		if (book.status) {
			status.textContent = "Read";
		} else {
			status.textContent = "Not read";
		}
		let removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.addEventListener("click", (e) => {
			e.preventDefault();
		});

		card.append(title, author, status, removeBtn);
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
	let id = crypto.randomUUID();
	addBookToLibrary(title, author, status, id);

	document.querySelector("#newTitle").value = "";
	document.querySelector("#newAuthor").value = "";
	document.querySelector("#newStatusRead").checked = true;
	document.querySelector("#popup").close();

	// needs to only show
	displayBook(myLibrary);
	console.log(myLibrary);
});
