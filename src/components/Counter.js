import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 5);

    console.log(`after setState: ${count}`);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
