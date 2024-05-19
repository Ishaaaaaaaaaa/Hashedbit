const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = []; 

function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;


  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  listItem.appendChild(checkbox);

  
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  listItem.appendChild(removeButton);

  
  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed');
  });

  
  removeButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
    todos = todos.filter(todo => todo.text !== text); 
  });

  return listItem;
}


addButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    const newTodoItem = createTodoItem(newTodoText);
    todoList.appendChild(newTodoItem);
    todos.push({ text: newTodoText, completed: false }); 
    newTodoInput.value = ''; 
  }
});
