import React, {useState} from 'react'
import Parent from './parent'
import CounterContext from './counter-context';
import Child2 from './child2';
import './App.css';
function App() {
  let countState = useState(0)
  return (
    <CounterContext.Provider value={countState}>
      <div className="parent">
        <h1>React Context and Reducer Hooks.</h1>
        <Parent />
        <Child2 />
      </div>
    </CounterContext.Provider>
  );
}

export default App;


// Four ways to define Functional Componets in React

// 1. Function Declaration:
// function MyComponent() {
//   return <div>Functional Component</div>;
// }

// 2. Arrow Function:
// const MyComponent = () => {
//   return <div>Functional Component</div>;
// };

// 3. Named Function Expression:
// const MyComponent = function() {
//   return <div>Functional Component</div>;
// };

// 4. Arrow Function with Implicit Return:
// const MyComponent = () => <div>Functional Component</div>;

