import printTodos from "../modules/printTodos.js";
import { listDrop } from "../modules/printLists.js";

let saveTodoName = document.getElementById('saveTodoName');
let saveTodoBtn = document.getElementById('saveTodoBtn');

export default saveTodoBtn.addEventListener('click', () => {
  console.log('click', saveTodoName.value, listDrop.value);

  fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newTodoName: saveTodoName.value, newTodoList: listDrop.value })
  })
    .then(response => response.json())
    .then(data => {
      console.log('skapa item', data)
      printTodos(listDrop.value);
    });
});