const addToDoButton = document.querySelector("button");

addToDoButton.addEventListener("click", (e) => {
  // 리스트 만들기
  const newListElement = document.createElement("li");
  const newToDoSpan = document.createElement("span");
  const newInputElement = document.createElement("input");
  newInputElement.type = "checkbox";
  // input text value 가져오기
  const addToDoInput = document.querySelector("#saveToDoSomething");
  newToDoSpan.textContent = addToDoInput.value;
  newToDoSpan.prepend(newInputElement);
  newListElement.append(newToDoSpan);

  const newDateSpan = document.createElement("span");
  newDateSpan.className = "addDate";
  newDateSpan.textContent = new Date().toLocaleString();

  const newDeleteSpan = document.createElement("span");
  newDeleteSpan.className = "deleteToDo";
  newDeleteSpan.textContent = "X";

  newDateSpan.append(newDeleteSpan);
  newListElement.append(newDateSpan);

  // ul에 붙이기
  const toDoListWrapper = document.querySelector(".toDoListWrapper");
  toDoListWrapper.prepend(newListElement);
  e.preventDefault();
});
