// This function sanitizes and validates the input value.
export const sanitizedAndValidInput = (input) => {
  // Allow only numbers, Hindi alphabets, and English alphabets, ignoring "(" and ")"
  const regex = /^[\d\u0900-\u097Fa-zA-Z()]+$/;

  // excluding "(" and ")" from the input before testing so that it will not cause to return false
  const sanitizedInput = input.replace(/[()]/g, "").trim();

  // Check if the sanitized input (without parentheses) matches allowed characters
  if (!regex.test(sanitizedInput)) {
    return false;
  }

  // Check for SQL injection patterns (very basic check)
  const sqlInjectionPattern =
    /(\b(SELECT|UPDATE|DELETE|INSERT|DROP|ALTER|CREATE|EXEC)\b|--|\||;)/i;
  if (sqlInjectionPattern.test(sanitizedInput)) {
    return false;
  }

  // Check for script injections (cross-site scripting - XSS)
  const xssPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  if (xssPattern.test(sanitizedInput)) {
    return false;
  }

  return true; // Input is valid and safe
};
