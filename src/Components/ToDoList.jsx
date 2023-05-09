import React, { useState } from 'react';

function TodoList(props) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addItem() {
    setItems([...items, text]);
    setText('');
  }
  function reset(){
    setItems([]);
    setText('');
  }
  function remove(item){
    const removeItem = items.filter(index => index !== item)
    setItems(removeItem)
  }

  return (
    <div>
      <h2>ToDoList:</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <button onClick={reset}>Reset</button>
      
     
        {props.render(items,remove)}
      
    </div>
  );
      }
export default TodoList;