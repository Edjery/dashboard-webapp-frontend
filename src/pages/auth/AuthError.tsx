import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButtonHandle from "../../components/common/LoadingButtonHandle";

const AuthError = () => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleReturn = async () => {
    setSubmitting(true);
    navigate("/login");
    setSubmitting(false);
  };
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        Authentication Failed
      </Typography>
      <Typography variant="h6" textAlign="center">
        Please Try again
      </Typography>
      <LoadingButtonHandle
        isSubmitting={submitting}
        onClick={handleReturn}
        buttonText="Try Again"
        color="primary"
      />
    </Stack>
  );
};

export default AuthError;
