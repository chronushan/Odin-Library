const myLibrary = [];

function Book(author, title, pages, status) {
	// Book object constructor
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.status = status;
}

const sample = new Book("The Phantom Tollbooth", "Norton Jester", "272", true);
addBookToLibrary(sample);

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
const remove = document.querySelector(".remove");
const cards = document.querySelector(".cards");

const read = document.querySelector(".card .status");

read.addEventListener("click", function () {
	if (read.textContent == "Read") {
		read.textContent = "Not read yet";
	} else if (read.textContent == "Not read yet") {
		read.textContent = "Read";
	}
});

button.addEventListener("click", function (event) {
	event.preventDefault();

	const newbook = new Book(
		title.value,
		author.value,
		pages.value,
		readstatus.checked
	);
	addBookToLibrary(newbook);

	title.value = "";
	author.value = "";
	pages.value = "";

	function display() {
		for (let i = 0; i < myLibrary.length; i++) {
			const div = document.createElement("div");
			div.classList.add("card");
			div.dataset.index = myLibrary.indexOf(newbook);

			const newtitle = document.createElement("h2");
			newtitle.classList.add("title");
			const newauthor = document.createElement("p");
			newauthor.classList.add("author");
			const newpages = document.createElement("p");
			newpages.classList.add("pages");
			const newstatus = document.createElement("p");
			newstatus.classList.add("status");
			const newremove = document.createElement("p");
			newremove.classList.add("remove");

			const upper = document.createElement("div");
			upper.classList.add("upper");
			upper.appendChild(newtitle);
			upper.appendChild(newauthor);
			upper.appendChild(newpages);

			const lower = document.createElement("div");
			lower.classList.add("lower");
			lower.appendChild(newstatus);
			lower.appendChild(newremove);

			cards.appendChild(div);
			div.appendChild(upper);
			div.appendChild(lower);

			newremove.textContent = "Remove";
			newtitle.textContent = myLibrary[i].title;
			newauthor.textContent = myLibrary[i].author;
			newpages.textContent = myLibrary[i].pages;

			if (readstatus.checked == true) {
				newstatus.textContent = "Read";
				myLibrary[i].status = true;
			} else {
				newstatus.textContent = "Not read yet";
				myLibrary[i].status = false;
			}

			// TODO: make remove button functional

			remove.addEventListener("click", function () {
				// myLibrary.splice(i, 1);
				newremove.textContent = "removed";
				// cards.removeChild(
				// 	document.querySelector(`.card[data-index]=${myLibrary[i]}`)
				// );
			});

			newstatus.addEventListener("click", function () {
				if (myLibrary[i].readstatus == true) {
					newstatus.textContent = "Not read yet";
					myLibrary[i].status = false;
				} else if (myLibrary[i].readstatus == false) {
					newstatus.textContent = "Read";
					myLibrary[i].status = true;
				}
			});
		}
	}
	display();
	readstatus.checked = false;
});
