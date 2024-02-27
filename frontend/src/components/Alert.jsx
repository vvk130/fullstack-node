import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check'

export default function SimpleAlert(text) {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        {text}
      </Alert>
    );
  }