export function formatDateFromString(stringDate) {
  const parsedDate = new Date(stringDate);

  // Check if the date is invalid
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date string');
  }

  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
  const year = parsedDate.getFullYear();

  return `${day}.${month}.${year}`;
}
