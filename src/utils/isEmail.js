export function isEmail(email) {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    return true;
  }
  return false;
}
