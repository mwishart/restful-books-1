import { BooksDAO } from '../persistence/BooksDAO.mjs';
import { Memory } from 'lowdb';
import { expect } from 'chai';

let testData = {
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      authorId: '1',
      year: 1925,
    },
    {
      id: '2',
      title: 'Clifford, the Big Red Dog',
      author: 'Norman Bridwell',
      authorId: '2',
      year: 1963,
    },
  ],
  authors: [
    {
      id: '1',
      firstName: 'Francis',
      lastName: 'Fitzgerald',
      authorName: 'F. Scott Fitzgerald',
      country: 'USA',
    },
    {
      id: '2',
      firstName: 'Norman',
      lastName: 'Bridwell',
      authorName: 'Norman Bridwell',
      country: 'USA',
    },
  ],
};

describe('BooksDAO Tests', () => {
  /** @type {BooksDAO} */
  let dao;

  beforeEach(async () => {
    let memoryAdapter = new Memory();
    await memoryAdapter.write(testData);
    dao = new BooksDAO(memoryAdapter);
    await dao.read();
  });

  it('should have some data', () => {
    let foundBook = dao.findBookById(1);
    expect(foundBook.id).to.equal('1');
  });

  it('findBooks() should return the whole collection', () => {
    let bookResults = dao.findBooks();
    expect(bookResults.length).to.equal(2);
    expect(bookResults).to.deep.equal(testData.books);
  });

  it('findBooks(criteria) should return matches', () => {
    let bookResults = dao.findBooks({ author: 'Norman Bridwell' });
    expect(bookResults.length).to.equal(1);
    expect(bookResults[0]).to.deep.equal(testData.books[1]);
  });

  it('findBooks(criteria, true) should return matches for partial results', () => {
    let bookResults = dao.findBooks({ author: 'Norman' }, true);
    expect(bookResults.length).to.equal(1);
    expect(bookResults[0]).to.deep.equal(testData.books[1]);
  });

  it('addBook() should add a book', async () => {
    let initialBooks = dao.findBooks();
    expect(initialBooks.length).to.equal(testData.books.length);
    let bookToAdd = {
      title: 'Test Book',
      author: 'Test author',
      authorId: 3,
      year: 2022,
    };
    let addedBook = await dao.addBook(bookToAdd);
    let bookResults = dao.findBooks();
    expect(bookResults.length).to.equal(3);
    expect(addedBook).not.to.be.null;
  });

  it('addBook() should provide an ID', async () => {
    let bookToAdd = {
      title: 'Test Book',
      author: 'Test author',
      authorId: 3,
      year: 2022,
    };
    let addResult = await dao.addBook(bookToAdd);
    expect(addResult.id).not.to.be.null;
    expect(addResult.id.length).to.be.greaterThanOrEqual(10);
  });
});
