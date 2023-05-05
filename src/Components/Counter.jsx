import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter(props) {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + props.incrementAmount);
  }

  return (
    <>
      <CounterDisplay count={count} />
      <button onClick={add}>Increment</button>
    </>
  );
}

export default Counter;
