import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

const Databoard = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {isAuthenticated ? (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </>
        ) : (
          <Typography variant="h4" fontWeight="bold">
            You must be logged in to see the data
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Databoard;
