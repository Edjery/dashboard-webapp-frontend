import {
  Box,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import IAuthUser from "../pages/auth/interface/IAuthUser";
import userService from "../services/userService";
import LoadingButton from "./common/LoadingButton";
import LoadingButtonHandle from "./common/LoadingButtonHandle";
import Title from "./common/Title";

const TwoFactorInfo = () => {
  const [loading, setLoading] = useState(true);

  const auth = useAuthUser<IAuthUser>();
  const userId = auth?.id !== undefined ? auth.id : undefined;

  const [activated, setActivate] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAuthStatus = await userService.getAuthStatus(userId);
        setActivate(userAuthStatus);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleActivation = async () => {
    setSubmitting(true);
    const response = await userService.updateAuthStatus(userId);

    if (response) {
      setActivate(!activated);
    }
    setSubmitting(false);
  };

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
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
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Paper sx={{ p: 2 }}>
                  <Title>Settings</Title>
                  <Typography fontWeight="bold">
                    Two Factor Authentication
                  </Typography>
                  <Typography>
                    You can set up a two factor authentication using AuthenFace
                  </Typography>
                  <Stack direction="row" spacing={2} my={2}>
                    {activated ? (
                      <LoadingButtonHandle
                        isSubmitting={submitting}
                        onClick={handleActivation}
                        buttonText="Activate"
                        color="primary"
                      />
                    ) : (
                      <LoadingButtonHandle
                        isSubmitting={submitting}
                        onClick={handleActivation}
                        buttonText="Deactivate"
                        color="error"
                      />
                    )}
                    {activated ? null : (
                      <Link
                        href="http://localhost:1776/register"
                        target="_blank"
                        underline="none"
                      >
                        <LoadingButton
                          isSubmitting={submitting}
                          buttonText="Setup AuthenFace"
                        />
                      </Link>
                    )}
                  </Stack>

                  <Typography fontWeight="bold">{`Here's how you can get started`}</Typography>
                  <Box pl={1}>
                    <Typography>
                      Activate the two factor authentication by pressing the
                      activate button above
                    </Typography>
                    <Typography>
                      Click the button above to setup AuthenFace
                    </Typography>
                    <Typography>Register an account!</Typography>
                    <Typography>Register this website</Typography>
                    <Typography>Then you're done!</Typography>
                    <Typography>
                      Click the Deactivate button if you don't want to use two
                      factor anymore
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default TwoFactorInfo;
