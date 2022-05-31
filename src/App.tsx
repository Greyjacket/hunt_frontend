import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='loginFormContainer'>
      <LoginForm/>
      </div>
    </div>
  );
}

export default App;
