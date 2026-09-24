import { validateEmail, validatePassword, validateForm } from './validation.js';

test('empty email returns error', () => {
  expect(validateEmail('')).toBe('Email cannot be empty');
});
test('invalid email format', () => {
  expect(validateEmail('test@abc')).toBe('Email format is invalid');
});
test('valid email pass', () => {
  expect(validateEmail('test@example.com')).toBeNull();
});

test('empty password', () => {
  expect(validatePassword('')).toBe('Password cannot be empty');
});
test('password less than 8 chars', () => {
  expect(validatePassword('Ab1!')).toBe('Password minimum length is 8 characters');
});
test('no uppercase', () => {
  expect(validatePassword('abcd123!')).toBe('Password must contain uppercase letter');
});
test('no lowercase', () => {
  expect(validatePassword('ABCD123!')).toBe('Password must contain lowercase letter');
});
test('no number', () => {
  expect(validatePassword('Abcdefg!')).toBe('Password must contain at least one number');
});
test('no special char', () => {
  expect(validatePassword('Abcdefg1')).toBe('Password must contain at least one special character (!@#$%^&*)');
});
test('valid password pass', () => {
  expect(validatePassword('Abc123!*')).toBeNull();
});

test('full valid form', () => {
  const res = validateForm('test@example.com','Abc123!*');
  expect(res.isValid).toBe(true);
  expect(res.emailError).toBeNull();
  expect(res.passwordError).toBeNull();
});
