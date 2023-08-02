const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

function addTodoItem(text) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${text}
    <button class="delete-btn">삭제</button>
  `;
  todoList.appendChild(listItem);

  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });
}
