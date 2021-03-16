import React from 'react';
import './App.css';
import ClassComp from './class-component';
import FunctionComp from './function-component';
import ArrComp from './function-component/arrowFunc';

function App() {
  return (
    <div className="App">
      <h2>Class Component</h2>
      <ClassComp titleH1='Shaula Component' nama='shaula' />

      <h2>Function Component</h2>
      <FunctionComp title='function component' />

      <h2>Arrow Func</h2>
      <ArrComp title='arrow func' />
    </div>
  );
}

export default App;
