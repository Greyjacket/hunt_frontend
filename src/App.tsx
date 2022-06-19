import React from 'react';
import './App.css';
import LoginForm from './Pages/LoginForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import SharedLayout from './Components/SharedLayout';
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
        <Route path='/' element={<Dashboard user={user}/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='login' element={<div className="App">
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

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route
//             path='/'
//             element={
//               <ProtectedRoute user={user}>
//                 <Dashboard user={user}/>
//               </ProtectedRoute>
//             }
//       />
//       <Route path='/login' element={<div className="App">
//         <div className='loginFormContainer'>
//         <LoginForm/>
//         </div>
//       </div>}>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );