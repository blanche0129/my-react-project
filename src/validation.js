import { validate } from 'email-validator';

export function validateEmail(email) {
  if (!email) return 'Email cannot be empty';
  if (!validate(email)) return 'Email format is invalid';
  return null;
}

export function validatePassword(password) {
  if (!password) return 'Password cannot be empty';
  if (password.length < 8) return 'Password minimum length is 8 characters';
  if (!/[A-Z]/.test(password)) return 'Password must contain uppercase letter';
  if (!/[a-z]/.test(password)) return 'Password must contain lowercase letter';
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
  if (!/[!@#$%^&*]/.test(password)) return 'Password must contain at least one special character (!@#$%^&*)';
  return null;
}

export function validateForm(email, password) {
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  return {
    isValid: !emailError && !passwordError,
    emailError,
    passwordError
  };
}
