import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addItem() {
    setItems([...items, text]);
    setText('');
  }

  return (
    <div>
      <h2>ToDoList:</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        
      </ul>
    </div>
  );
}
export default TodoList;