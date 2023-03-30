import printTodos from "../modules/printTodos.js";

export default function todoSaveDone(id, list) {

  console.log('spara item som klart', id);

  fetch('http://localhost:3000/done/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ itemId: id })
  })
    .then(response => response.json())
    .then(data => {
      console.log('sparad som klart ', data)
      printTodos(list);
    })


}