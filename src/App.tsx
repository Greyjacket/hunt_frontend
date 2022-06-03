import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import { useState } from 'react';

export interface User {
  username: String,
}

function App() {
  const [user, setUser] = useState<User>({
    username: "",
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route
              path='/'
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user}/>
                </ProtectedRoute>
              }
            />
        <Route path='/login' element={<div className="App">
          <div className='loginFormContainer'>
          <LoginForm/>
          </div>
        </div>}>
      </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
