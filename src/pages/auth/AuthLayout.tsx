import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <Box maxWidth="500px" m="auto">
      <AppBar>
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard App
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
      <ToastContainer />
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
