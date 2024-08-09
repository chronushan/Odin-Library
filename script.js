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

// function displayBookToLibrary(myLibrary) {
// 	for (const books of myLibrary) {
// 		newtitle.textContent = books[author];
// 		newauthor.textContent = books[title];
// 		newpages.textContent = books[pages];

// 		if (readstatus.checked == true) {
// 			newstatus.textContent = "Read";
// 		} else {
// 			newstatus.textContent = "Not read yet";
// 		}
// 	}
// }

const button = document.querySelector("button");
const title = document.querySelector("input.title");
const author = document.querySelector("input.author");
const pages = document.querySelector("input.pages");
const readstatus = document.querySelector("input.status");

const read = document.querySelector(".card .status");

button.addEventListener("click", function (event) {
	event.preventDefault();

	const cards = document.querySelector(".cards");
	const div = document.createElement("div");
	div.classList.add("card");

	const newtitle = document.createElement("h2");
	newtitle.classList.add("title");
	const newauthor = document.createElement("p");
	newauthor.classList.add("author");
	const newpages = document.createElement("p");
	newpages.classList.add("pages");
	const newstatus = document.createElement("p");
	newstatus.classList.add("status");

	const newbook = new Book(
		title.value,
		author.value,
		pages.value,
		readstatus.checked
	);
	addBookToLibrary(newbook);

	newtitle.textContent = title.value;
	newauthor.textContent = author.value;
	newpages.textContent = pages.value;

	if (readstatus.checked == true) {
		newstatus.textContent = "Read";
	} else {
		newstatus.textContent = "Not read yet";
	}

	title.value = "";
	author.value = "";
	pages.value = "";
	readstatus.checked = false;

	const upper = document.createElement("div");
	upper.classList.add("upper");
	upper.appendChild(newtitle);
	upper.appendChild(newauthor);
	upper.appendChild(newpages);

	cards.appendChild(div);
	div.appendChild(upper);
	// div.appendChild(newauthor);
	// div.appendChild(newpages);
	div.appendChild(newstatus);
});

read.addEventListener("click", function () {
	if (read.textContent == "Read") {
		read.textContent = "Not read yet";
	} else if (read.textContent == "Not read yet") {
		read.textContent = "Read";
	}
});
