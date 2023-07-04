export function formatNumer(number) {
  const string = String(number);
  if (string.length > 3)
    return formatNumer(string.slice(0, -3)) + "," + string.slice(-3);
  return string;
}
