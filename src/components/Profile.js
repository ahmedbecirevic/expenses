import { Box, Stack, Typography } from '@mui/material';
import Logout from './Logout';

function Profile() {
  const profileImg = localStorage.getItem('picture') || '/static/user-profile 1.svg';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <Box sx={{
        width:
        {
          md: '40vw',
          sm: '60vw',
          xs: '90vw',
          xl: '35vw',
        },
        height: {
          sm: '420px',
          xs: '400px',
          xl: '500px',
        },
        mt: { xs: 4, md: 10 },
        bgcolor: '#E6E9E8',
        borderRadius: 5,
      }}
      >
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
          <Box sx={{ mt: 4 }}>
            <img width={150} height={150} src={profileImg} alt="profile" />
          </Box>
          <Typography variant="body">{localStorage.getItem('name')}</Typography>
          <Typography variant="body">{localStorage.getItem('email')}</Typography>
          <Logout />
        </Stack>
      </Box>
    </Box>

  );
}

export default Profile;
