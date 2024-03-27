import { Box, CssBaseline } from "@mui/material";
import NavBar from "../components/dashboard/NavBar";
import TwoFactorInfo from "../components/TwoFactorInfo";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <TwoFactorInfo />
    </Box>
  );
}
