import React from 'react';
import { TextField, Button } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LoginForm, PageTitle } from './styled';


const Login = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const logIn = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }


  return (
    <div>
      <PageTitle className='pageTitle' variant="h4">Login</PageTitle>
      <LoginForm>
        <TextField
          label="User name"
          color="secondary"
          focused
          value={userName}
          onChange={(v) => setUserName(v.target.value)}
          sx={{ margin: '20px 0' }}
        />
        <TextField
          label="Passowrd"
          color="secondary"
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
          sx={{ margin: '20px 0' }}
        />
        <Button
          disabled={isLoading || !userName || !password}
          onClick={logIn}
          variant="contained">
          {isLoading ? (
            <Box sx={{ display: 'flex' }}>
              Logging in... &nbsp;&nbsp;<CircularProgress color="secondary" size={20} />
            </Box>) : 'Log in'}
        </Button>
      </LoginForm>
    </div>
  )
}

export default Login;