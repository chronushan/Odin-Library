const button = document.querySelector("button");
const title = document.querySelector("input.title");
const author = document.querySelector("input.author");
const pages = document.querySelector("input.pages");
const readstatus = document.querySelector("input.status");
const cards = document.querySelector(".cards");

//Book objects array
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

//dummy book object
const example = new Book("Norton Jester", "The Phantom Tollbooth", 272, true);
addBookToLibrary(example);

//TODO: make function that removes book from the array
function removeBookFromLibrary() {}
//TODO: make function that only adds new books from the array. If it exists, don't add, or just reset and load the whole library from the beginning
function display() {
	for (let i = 0; i < myLibrary.length; i++) {
		const indvCard = document.createElement("div");
		indvCard.classList.add("card");
		indvCard.dataset.index = i;

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

		newtitle.textContent = myLibrary[i].title;
		newauthor.textContent = myLibrary[i].author;
		newpages.textContent = myLibrary[i].pages;
		newremove.textContent = "Remove";

		if (myLibrary[i].status == true) {
			newstatus.textContent = "Read";
		} else {
			newstatus.textContent = "Not read yet";
		}

		const upper = document.createElement("div");
		upper.classList.add("upper");
		upper.appendChild(newtitle);
		upper.appendChild(newauthor);
		upper.appendChild(newpages);

		const lower = document.createElement("div");
		lower.classList.add("lower");
		lower.appendChild(newstatus);
		lower.appendChild(newremove);

		cards.appendChild(indvCard);
		indvCard.appendChild(upper);
		indvCard.appendChild(lower);

		const remove = document.querySelector(".remove");

		remove.addEventListener("click", function () {
			myLibrary.splice(i, i + 1);
		});

		newstatus.addEventListener("click", function () {
			if (myLibrary[i].status == true) {
				newstatus.textContent = "Not read yet";
				myLibrary[i].status = false;
			} else if (myLibrary[i].status == false) {
				newstatus.textContent = "Read";
				myLibrary[i].status = true;
			}
		});
	}
}

// Creates new object and adds it to the array, then displays it
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
	readstatus.checked = false;

	display();
});

display();
