import { useState } from 'react';
import { TextField, Button, Snackbar, Alert, Box } from '@mui/material';
import { validateForm } from './validation.js';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    const result = validateForm(email, password);
    setEmailError(result.emailError);
    setPasswordError(result.passwordError);
    if (result.isValid) {
      setShowSuccess(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '50px auto', padding: 3 }}>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Validation passed!
        </Alert>
      </Snackbar>
    </Box>
  );
}
