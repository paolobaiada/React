import React from "react";
import ToDoList from "./Components/ToDoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoList
          render={(items, remove) => {
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item} <button onClick={() => remove(item)}>X</button>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </div>
    );
  }
}

export default App;