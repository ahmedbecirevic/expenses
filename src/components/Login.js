/* eslint-disable camelcase */
import GoogleLogin from 'react-google-login';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { setUserId } from '../features/userSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoggedInHandler = ({ tokenId }) => {
    const {
      sub, name, email, picture,
    } = jwt_decode(tokenId);
    dispatch(setUserId(sub));
    localStorage.setItem('id', sub);
    localStorage.setItem('token', tokenId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('picture', picture);
    navigate('/');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        bgcolor: '#1a4246',
        height: '45vh',
        width: { lg: '25vw', xs: '70vw', sm: '38vw' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 3,
        borderRadius: '7px',
      }}
      >
        <Typography sx={{ color: 'white', mb: 6 }} variant="h5">Expenses</Typography>
        <Box sx={{ mb: 6 }}>
          <img width="120px" height="120px" src="/static/logos/expense.png" alt="expense" />
        </Box>
        <GoogleLogin
          clientId="939757022094-s3i5fmar4d1vbiu6i7834jh6u8kmgotl.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={onLoggedInHandler}
          // eslint-disable-next-line no-console
          onFailure={() => console.log('fail')}
          cookiePolicy="single_host_origin"
        />
      </Box>
    </Box>
  );
}

export default Login;
