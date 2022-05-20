import React from 'react';
import {useState, ChangeEvent, MouseEvent} from 'react';
import {FormControl, Input, InputAdornment} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Password from '@mui/icons-material/Password';
import logo from './Images/logo.png';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

interface LoginState {
  authenticating: boolean,
  failure: boolean,
  userName: String,
  password: String
}

function LoginForm() {
  const [loginState, setLoginState] = useState<LoginState>({
    authenticating: false,
    failure: false,
    userName: "",
    password: ""
  })

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({'username': loginState.userName, 'password': loginState.password})
  };

  const post_credentials = async () => {
    await fetch('http://127.0.0.1:8000/token', requestOptions)
      .then(response => response.json())
      .then(data => {console.log('data')})
      .catch(err => console.log(err))
  };

  const handleField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof LoginState) => {
    setLoginState(prevState => {
      return({ ...prevState, [event.target.id]: event.target.value, failure: false })
    });
  };

  const handleLogin = () => {
    let success = post_credentials();
    if (loginState.userName != 'test' && loginState.password != 'test' ){
      setLoginState(prevState => {
        return { ...prevState, failure: true}
      });    
    }
    setLoginState(prevState => {
      return { ...prevState, userName: "", password: ""}
    });   
  };

  return (
    <div className="loginForm">
      <img src={logo} className="loginLogo" alt=""/>
      <FormControl sx={{input: {color: '#1769aa', mt: .5}}} color="primary" margin="dense">
        <Input type='text' id="userName" value={loginState.userName} onChange={(event) => handleField(event, 'userName')} placeholder="Username" startAdornment={
            <InputAdornment position="start">
              <AccountCircle className={loginState.failure? 'loginFailure' : ''} style={{ color: "#1769aa" }}/>
            </InputAdornment>
          }/>
      </FormControl>
      <FormControl sx={{input: {color: '#1769aa', mt: .5}}}>
        <Input type='password' id="password" value={loginState.password} onChange={(event) => handleField(event, 'password')} placeholder="Password" startAdornment={
            <InputAdornment position="start">
              <Password className={loginState.failure? 'loginFailure' : ''} style={{ color: "#1769aa" }}/>
            </InputAdornment>
          }/>
      </FormControl>

      <Box sx={{width:50, height: 50}}>
      {loginState.authenticating ?
      <CircularProgress sx={{mt: 1, ml: 1}}/>
      :
      <IconButton onClick={handleLogin}>
        <Fingerprint className={loginState.failure? 'thumbprintFailure' : ''} sx={{width:40, height: 40}}/>
      </IconButton>
      }
      </Box>
    </div>
  );
}

export default LoginForm;
  