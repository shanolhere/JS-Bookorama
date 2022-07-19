const search = document.querySelector(".search");
const text = document.querySelector(".text");
const checkbox = document.querySelector(".checkbox");
const delBtn = document.querySelector(".delete");
const addBtn = document.querySelector(".add");
const list = document.querySelector("ul");
const result = document.querySelector(".result");

addBtn.addEventListener("click", () => {
  //console.log(text.value);
  if (!text.value) {
    result.innerHTML = "Please enter a book name";
    result.style.color = "red";
  } else {
    result.style.display = "none";
    const ul = document.querySelector(".bookul");
    const li = document.createElement("li");
    li.innerHTML = `${text.value} <button class="delete">Delete</button>`;
    ul.appendChild(li);
    text.value = "";
  }
});

list.addEventListener("click", (e) => {
  //console.log(e.target.className);
  if (e.target.className === "delete") {
    //console.log(e.target.parentElement);
    let liItem = e.target.parentElement;
    //console.log(liItem.parentNode);
    let parentEl = liItem.parentNode;
    parentEl.removeChild(liItem);
  }
});

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

search.addEventListener("keyup", (e) => {
  //console.log(search.value);
  //const searchValue = e.target.value.toLowerCase();
  //console.log(searchValue);
  //const listItems = list.querySelectorAll("li");
  //console.log(listItems[0].firstElementChild.textContent);

  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(e.target.value) !== -1) {
      book.style.display = "flex";
      // book.style.width = "500px";
    } else {
      book.style.display = "none";
    }
  });
});
