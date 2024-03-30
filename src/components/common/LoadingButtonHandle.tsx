import { Button, CircularProgress, Typography } from "@mui/material";

interface Props {
  isSubmitting: boolean;
  buttonText: string;
  onClick: () => void;
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit";
}

const LoadingButtonHandle = ({
  isSubmitting,
  buttonText,
  onClick,
  color,
}: Props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={isSubmitting}
      onClick={onClick}
      color={color}
    >
      {isSubmitting ? (
        <CircularProgress color="primary" size={30} sx={{ padding: 1 }} />
      ) : (
        <Typography fontSize={20} sx={{ padding: 1 }}>
          {buttonText}
        </Typography>
      )}
    </Button>
  );
};

export default LoadingButtonHandle;
