import {
  AppBar, Toolbar, Typography, Button, Box,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/expenses">
            <Typography variant="h6">
              Expenses
            </Typography>
          </NavLink>
          <Box sx={{ display: "flex", justifyContent: "right", flexGrow: 1 }}>
            <Link to="Profile">
              <Button color="inherit">Profile</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
