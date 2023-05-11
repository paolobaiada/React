import React, { useState } from 'react';

function TodoList() {
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
  function remove(index){
    const updateItems = [...items]
    updateItems.splice(index,1)
    setItems(updateItems)
  }

  return (
    <div>
      <h2>ToDoList:</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <button onClick={reset}>Reset</button>
      
      <ul>
        {items.map((item, index) => {
          return (
            <>
            <li key={index}>{item}</li>
            <button onClick={()=> remove(index)}>invio</button>
            </>
           
          )
          
        }
        
         
          
        )}
        
      </ul>
    </div>
  );
      }
export default TodoList;