import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0); //hook
  
  function handleIncrease(){
    setCount(count + 1);
  }

  function handleDecrease(){
    setCount(count - 1);
  }

  function handleDouble(){
    setCount(count * 2);
  }

  return <div>
  <h2>Counter</h2>
  <h3>{count}</h3>
  <IncreaseButton handleIncrease={handleIncrease}/>
  <DecreaseButton handleDecrease={handleDecrease}/>
  <DoubleButton handleDouble={handleDouble}/>
  </div>

};


function IncreaseButton({handleIncrease}){  
  return <>
  <button onClick={handleIncrease}>+</button>
  </>
};

function DecreaseButton({handleDecrease}){
  return <>
  <button onClick={handleDecrease}>-</button>
  </>
};

function DoubleButton({handleDouble}){
  return <>
  <button onClick={handleDouble}>Double</button>
  </>
};

export default App