const MIN_LENGTH = 8;

/**
 * Returns a validation message if the password does not meet strength rules,
 * or undefined if empty (no inline nag until the user types) or if valid.
 */
export function getStrongPasswordError(password: string): string | undefined {
  if (!password) return undefined;

  if (password.length < MIN_LENGTH) {
    return `Password must be at least ${MIN_LENGTH} characters`;
  }
  if (!/[a-z]/.test(password)) {
    return "Password must include a lowercase letter";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must include an uppercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must include a number";
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return "Password must include a special character";
  }
  return undefined;
}
