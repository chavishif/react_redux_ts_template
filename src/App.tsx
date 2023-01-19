import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Student } from './features/student/Student';

function App() {
  return (
    <div className="App">
      
        {/* <Counter /> */}
      <Student/>
    </div>
  );
}

export default App;
