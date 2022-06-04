import {
  AppBar, Toolbar, Button, Box, styled, alpha,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const RootStyle = styled(AppBar)(() => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha("#F9FAFB", 0.72),
}));

function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <RootStyle>
        <Toolbar>
          <NavLink to="/expenses">
            <Box component="img" src="/static/logos/expense.png" sx={{ width: 25, height: 25 }} />
          </NavLink>
          <Box sx={{ display: "flex", justifyContent: "right", flexGrow: 1 }}>
            <Link to="profile">
              <Button color="inherit">Profile</Button>
            </Link>
          </Box>
        </Toolbar>
      </RootStyle>
    </Box>
  );
}

export default Navigation;
