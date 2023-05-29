import React, { useContext } from 'react'
import CounterContext from './counter-context'
import './App.css';

function Child() {
    let counterValue = useContext(CounterContext)
    // console.log(counterValue)
   return (
    <div>
       <h3>This is a counter made with React Context Hook.</h3>
       <p>Counter value is: {counterValue[0]}</p>
       <button className="btn-14" onClick={() => { counterValue[1](++counterValue[0]) }}>Increment</button>
       <button className="btn-14" onClick={() => { counterValue[1](0) }}>Reset</button>
    </div>
          );
}

export default Child;
