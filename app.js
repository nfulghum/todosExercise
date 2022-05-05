const form = document.getElementById('newTodo');
const input = document.querySelector('#todo');
const todoList = document.getElementById('todoList');

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];




todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'LI') {
        e.target.style.textDecoration = 'line-through';
    }
});



form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newTodo.innerText = input.value + ' ';
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
    input.value = '';
    savedTodos.push({ todo: newTodo.innerText, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(savedTodos));

    console.log(savedTodos);
});

