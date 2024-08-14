import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,  setCounter] = useState(0);
  // let counter = 5;

  const addValue = ()=>{
    // console.log("Clicked",counter)
  
    setCounter(counter+1);
    if(counter == 20){
      setCounter(counter);
    }
  }
  const decreaseValue = ()=>{
    // counter = counter-1;
    setCounter(counter-1);
    if(counter == 0){
      setCounter(counter);
    }
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>+</button>
      <br/>
      <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default App
