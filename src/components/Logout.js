import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  return (
    <Button
      variant="primary"
      sx={{
        bgcolor: '#1a4246',
        px: 4,
        py: 2,
        borderRadius: '10px',
        color: 'white',
      }}
      onClick={() => {
        localStorage.removeItem('token');
        navigate('sign-in');
      }}
    >
      Logout
    </Button>
  );
}

export default Logout;
