import { Box, CssBaseline } from "@mui/material";
import Databoard from "../components/dashboard/Databoard";
import NavBar from "../components/dashboard/NavBar";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <Databoard />
    </Box>
  );
}
