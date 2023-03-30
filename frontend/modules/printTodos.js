import todoSaveDone from "../modules/todoSaveDone.js";
import { listDrop } from "../modules/printLists.js";

let root = document.getElementById('root');

listDrop.addEventListener('change', (e) => {
  console.log('ändra list', e.target.value)
  printTodos(e.target.value);
});

export default function printTodos(list) {

  if (!list) {
    list = 1
  }

  fetch('http://localhost:3000/items/' + list)
    .then(response => response.json())
    .then(data => {
      console.log('items', data)

      let ul = document.createElement('ul');

      data.map(todo => {
        let li = document.createElement('li');
        li.innerText = todo.itemName + ' ( ' + todo.listId + ' )';
        li.id = todo.itemId;

        li.addEventListener('click', () => {
          todoSaveDone(li.id, listDrop.value);
        });

        ul.appendChild(li);
      })
      root.innerHTML = '';
      root.appendChild(ul);
    });
}