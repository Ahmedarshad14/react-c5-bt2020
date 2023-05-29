import React, { useReducer } from "react";
import CounterReducer from "./counterreducer";
import './App.css';
const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 0);
  return (
    <div>
      <h3>This is a counter made with React Reducer Hook.</h3>
      <p>The value of the reducer counter is: {state}</p>
      <button className="btn-14" onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      <button className="btn-14"
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button className="btn-14"
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Child2;