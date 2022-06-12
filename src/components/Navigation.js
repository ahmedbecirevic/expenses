import {
  AppBar, Toolbar, Button, Box, styled, alpha,
} from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const NavBar = styled(AppBar)(() => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha('#CECECE', 0.72),
}));

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation().pathname.replace('/', '');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar>
        <Toolbar>
          <NavLink to="/">
            <Box component="img" src="/static/logos/expense.png" sx={{ width: 25, height: 25 }} />
          </NavLink>
          <Box sx={{ display: 'flex', justifyContent: 'right', flexGrow: 1 }}>
            <Button sx={{ color: 'black', fontWeight: location === '' && 'bold', mr: 1 }} onClick={() => navigate('/')} color="inherit">Expenses</Button>
            <Button sx={{ color: 'black', fontWeight: location === 'profile' && 'bold' }} onClick={() => navigate('profile')} color="inherit">Profile</Button>
          </Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
}

export default Navigation;
