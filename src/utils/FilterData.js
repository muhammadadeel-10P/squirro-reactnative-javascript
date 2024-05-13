// Function to extract IDs from books
export function extractBookIds(books) {
  return books?.data.map(book => book.id) ?? [];
}

// Function to get matching books from the array
export function getMatchingBooks(givenData, bookIds) {
  // Filter to get only book items matching the array of bookId
  const books = givenData.filter(
    item => item.type === 'books' && bookIds.includes(item.id),
  );
  return books;
}

// Function to get top selling books by providing filtered list of books only
export function getTopSellingBooks(maxResult = 2, givenData) {
  // Sort books by copiesSold in descending order
  givenData.sort(
    (a, b) => b?.attributes?.copiesSold - a?.attributes?.copiesSold,
  );

  // Return the maxResult required as a top selling
  return givenData.slice(0, maxResult) ?? [];
}

// Function to get matching books from the array
export function getAuthorsList(givenData) {
  // Filter to get only book items matching the array of bookId
  const authors = givenData.filter(item => item.type === 'authors');
  return authors;
}

// Function to find author from an array by it's id
export function findAutherById(id, givenData) {
  return givenData.find(item => item.type === 'authors' && item.id === id);
}

// Function to find country from an array by it's id
export function findCountryById(id, givenData) {
  return givenData.find(item => item.type === 'countries' && item.id === id);
}
