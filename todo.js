const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todo = {
      text: todoText,
      completed: false
    };
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });
  });
}