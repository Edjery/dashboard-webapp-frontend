import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import PrivacyActDialog from "../components/PrivacyActDialog";
import Databoard from "../components/dashboard/Databoard";
import NavBar from "../components/dashboard/NavBar";

export default function Home() {
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);

  const handlePrivacyDialogClose = () => {
    setPrivacyDialogOpen(false);
  };

  useEffect(() => {
    setPrivacyDialogOpen(true);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <Databoard />
      <PrivacyActDialog open={privacyDialogOpen} onClose={handlePrivacyDialogClose} />
    </Box>
  );
}
