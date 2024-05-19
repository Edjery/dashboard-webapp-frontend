import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const TermsDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Terms and Conditions</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          Welcome to Dashboard Website!
        </Typography>
        <Typography variant="body1" gutterBottom>
          These terms and conditions govern the use of the Dashboard Website API and related services provided by Self-Employed. By accessing or using our API, you agree to comply with these terms. If you do not agree, please do not use our API.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Terminology</strong> In these terms, "Client," "You," and "Your" refer to you, the individual or entity using our API. "Company," "We," "Our," and "Us" refer to Self-Employed. "Parties" refer to both you and us.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>License</strong> Self-Employed and its licensors own all intellectual property rights for the materials on Dashboard Website. You may access these materials for personal use, subject to the restrictions in these terms.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Restrictions</strong> You must not:
        </Typography>
        <ul>
          <li>Republish material from Dashboard Website</li>
          <li>Sell, rent, or sub-license material from Dashboard Website</li>
          <li>Reproduce, duplicate, or copy material from Dashboard Website</li>
          <li>Redistribute content from Dashboard Website</li>
        </ul>
        <Typography variant="body1" gutterBottom>
          <strong>User Consent and Data Requests</strong> By using the Dashboard Website API, you acknowledge and agree that:
        </Typography>
        <ul>
          <li>You may be requested to provide data, including images, for processing.</li>
          <li>You have obtained necessary consents from individuals whose data (including images) you provide.</li>
          <li>You will not use the API for any activity that violates any person's privacy or infringes on any intellectual property rights.</li>
        </ul>
        <Typography variant="body1" gutterBottom>
          <strong>Comments and User-Generated Content</strong> Users may post comments and share information on Dashboard Website. We do not filter, edit, or review comments before they appear on the site. Comments reflect the views of their authors, not Self-Employed. We are not liable for comments' content or any resulting liability.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Hyperlinking to Our Content</strong> The following organizations may link to our website without prior approval:
        </Typography>
        <ul>
          <li>Cybersecurity agencies</li>
          <li>Search engines</li>
          <li>Online directories</li>
        </ul>
        <Typography variant="body1" gutterBottom>
          Other organizations may link to our website with approval. Links must not be deceptive, imply false sponsorship, or fit poorly within the context of the linking site.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Content Liability</strong> We are not responsible for content on your website. You agree to protect and defend us against all claims arising from your website. No link should appear on your website that may be interpreted as libelous, obscene, or criminal.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Reservation of Rights</strong> We reserve the right to request the removal of any link to our website. By linking to our site, you agree to these terms.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Disclaimer</strong> We do not guarantee the accuracy or completeness of the information on this website. We exclude all representations, warranties, and conditions to the maximum extent permitted by law.
        </Typography>
        <Typography variant="body1" gutterBottom>
          By using the Dashboard Website API and services, you agree to these terms and conditions. If you have any questions, please contact us.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsDialog;
