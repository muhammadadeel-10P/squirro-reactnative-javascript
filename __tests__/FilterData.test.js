import {
  extractBookIds,
  getMatchingBooks,
  getTopSellingBooks,
  getAuthorsList,
  findAutherById,
  findCountryById,
} from '.././src/utils/FilterData';

describe('extractBookIds', () => {
  it('should extract book IDs from the given books data', () => {
    const books = {
      data: [
        {id: 1, title: 'Book 1'},
        {id: 2, title: 'Book 2'},
      ],
    };
    expect(extractBookIds(books)).toEqual([1, 2]);
  });

  it('should return an empty array if books data is not provided', () => {
    expect(extractBookIds(null)).toEqual([]);
  });
});

describe('getMatchingBooks', () => {
  it('should return matching books based on given book IDs', () => {
    const givenData = [
      {id: 1, type: 'books', title: 'Book 1'},
      {id: 2, type: 'books', title: 'Book 2'},
      {id: 3, type: 'authors', name: 'Author 1'},
    ];
    const bookIds = [1, 2];
    expect(getMatchingBooks(givenData, bookIds)).toEqual([
      {id: 1, type: 'books', title: 'Book 1'},
      {id: 2, type: 'books', title: 'Book 2'},
    ]);
  });

  it('should return an empty array if no matching book IDs are found', () => {
    const givenData = [
      {id: 1, type: 'books', title: 'Book 1'},
      {id: 2, type: 'books', title: 'Book 2'},
      {id: 3, type: 'authors', name: 'Author 1'},
    ];
    const bookIds = [4, 5];
    expect(getMatchingBooks(givenData, bookIds)).toEqual([]);
  });
});

describe('getTopSellingBooks', () => {
  it('should return top selling books based on copies sold', () => {
    const givenData = [
      {id: 1, attributes: {copiesSold: 50}},
      {id: 2, attributes: {copiesSold: 150}},
      {id: 3, attributes: {copiesSold: 100}},
    ];
    const result = getTopSellingBooks(2, givenData);
    expect(result).toEqual([
      {id: 2, attributes: {copiesSold: 150}},
      {id: 3, attributes: {copiesSold: 100}},
    ]);
  });

  it('should return an empty array if givenData is empty', () => {
    const givenData = [];
    const result = getTopSellingBooks(2, givenData);
    expect(result).toEqual([]);
  });
});

describe('getAuthorsList', () => {
  it('should return a list of authors from the given data', () => {
    const givenData = [
      {id: 1, type: 'books', title: 'Book 1'},
      {id: 2, type: 'authors', name: 'Author 1'},
      {id: 3, type: 'authors', name: 'Author 2'},
    ];
    expect(getAuthorsList(givenData)).toEqual([
      {id: 2, type: 'authors', name: 'Author 1'},
      {id: 3, type: 'authors', name: 'Author 2'},
    ]);
  });

  it('should return an empty array if no authors are found', () => {
    const givenData = [{id: 1, type: 'books', title: 'Book 1'}];
    expect(getAuthorsList(givenData)).toEqual([]);
  });
});

describe('findAutherById', () => {
  it('should find and return an author by its ID', () => {
    const givenData = [
      {id: 1, type: 'authors', name: 'Author 1'},
      {id: 2, type: 'authors', name: 'Author 2'},
    ];
    expect(findAutherById(1, givenData)).toEqual({
      id: 1,
      type: 'authors',
      name: 'Author 1',
    });
  });

  it('should return undefined if no author is found by the given ID', () => {
    const givenData = [{id: 1, type: 'authors', name: 'Author 1'}];
    expect(findAutherById(2, givenData)).toBeUndefined();
  });
});

describe('findCountryById', () => {
  it('should find and return a country by its ID', () => {
    const givenData = [
      {id: 1, type: 'countries', name: 'Country 1'},
      {id: 2, type: 'countries', name: 'Country 2'},
    ];
    expect(findCountryById(1, givenData)).toEqual({
      id: 1,
      type: 'countries',
      name: 'Country 1',
    });
  });

  it('should return undefined if no country is found by the given ID', () => {
    const givenData = [{id: 1, type: 'countries', name: 'Country 1'}];
    expect(findCountryById(2, givenData)).toBeUndefined();
  });
});
