import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingButtonHandle from "../../components/common/LoadingButtonHandle";
import userService from "../../services/userService";
import IAuthUser from "./interface/IAuthUser";

const Authenticate = () => {
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const signIn = useSignIn();
  const [token, setToken] = useState("");
  const location = useLocation();

  const getQueryParam = (param: string) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  useEffect(() => {
    const Data = getQueryParam("token") || "";
    setToken(Data);
  }, [location.search]);

  const handleSignIn = (token: string, userData: IAuthUser) => {
    signIn({
      auth: {
        token: token,
      },
      userState: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
      },
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const response = await userService.authenticate(token);
    if (response) {
      handleSignIn(response.data.token, response.data.userData);
      navigate("/");
      console.log("login success");
    }
    setSubmitting(false);
  };

  const handleReturn = async () => {
    setSubmitting(true);
    navigate("/");
    setSubmitting(false);
  };

  return (
    <Stack spacing={2}>
      {token !== "" ? (
        <>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Authenticated Sucessfully!
          </Typography>
          <Typography variant="h6" textAlign="center">
            Click the button to continue!
          </Typography>
          <LoadingButtonHandle
            isSubmitting={submitting}
            onClick={handleSubmit}
            buttonText="Login!"
            color="primary"
          />
        </>
      ) : (
        <>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            You are not supposed to be here
          </Typography>
          <Typography variant="h6" textAlign="center">
            Click the button to continue!
          </Typography>
          <LoadingButtonHandle
            isSubmitting={submitting}
            onClick={handleReturn}
            buttonText="Continue"
            color="primary"
          />
        </>
      )}
    </Stack>
  );
};

export default Authenticate;
