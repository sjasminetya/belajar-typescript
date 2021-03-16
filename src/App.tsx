import React from 'react';
import './App.css';
import ClassComp from './class-component';
import FunctionComp from './function-component';
import ArrComp from './function-component/arrowFunc';
import FetchData from './function-component/FetchData';

function App() {
  return (
    <div className="App">
      <ClassComp titleH1='class Component' nama='shaula' />

      <FunctionComp title='function component' />

      <ArrComp title='arrow func' />

      <FetchData title='fetch data from server' />
    </div>
  );
}

export default App;
