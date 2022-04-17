import {FormControl, InputLabel, Input, InputAdornment} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Password from '@mui/icons-material/Password';
import logo from './Images/logo.png';
import React from 'react';

// import LoadingButton from '@mui/lab/LoadingButton';

function LoginForm() {
  return (
    <div className="loginForm">
      <div className='loginLogoHeader'>
        <img src={logo} className="loginLogo" alt=""/>
      </div>
      <FormControl>
        <Input id="username" autoFocus={true} placeholder="Username" startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }/>
      </FormControl>
      <FormControl>
        <Input id="password"  placeholder="Password" startAdornment={
            <InputAdornment position="start">
              <Password />
            </InputAdornment>
          }/>
      </FormControl>
    </div>
    );
  }
  
  export default LoginForm;
  