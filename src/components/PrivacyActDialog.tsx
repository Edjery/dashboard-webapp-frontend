import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Link, Box } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const PrivacyActDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Data Privacy Notice</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" gutterBottom>
            Welcome! To continue using this website, please be aware of the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines. This act is a comprehensive privacy legislation that aims to protect the fundamental human right of privacy while ensuring the free flow of information to promote innovation and growth.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The act mandates that the processing of personal data by any organization, both in the private and public sectors, must adhere to the principles of transparency, legitimate purpose, and proportionality.
          </Typography>
          <Typography variant="body1" gutterBottom>
            For more detailed information, you can read the full text of the law by following this link: {" "}
            <Link href="https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html" target="_blank" rel="noopener">
              Republic Act 10173
            </Link>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            By continuing to use this website, you acknowledge that you have been informed about this data privacy legislation and agree to comply with its provisions.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          I Understand
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyActDialog;
