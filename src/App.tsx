import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import { useState } from 'react';

interface LoginState {
  authenticating: boolean,
  failure: boolean,
  userName: String,
  password: String
}

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<div className="App">
          <div className='loginFormContainer'>
          <LoginForm/>
          </div>
        </div>}>
      </Route>
      <Route
            path='dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
