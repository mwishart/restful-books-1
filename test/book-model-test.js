const { Op } = require('sequelize');
const { Author, Book, Library } = require('../orm/books/books-models');
const expect = require('chai').expect;

describe('Book Model', () => {
  // it(description, functionWithTestCode)
  it('Find at least one book', async () => {
    let books = await Book.findAll({ logging: false });
    expect(books).to.have.lengthOf.at.least(5);
  });

  it('Find some Books', async () => {
    let testTitle = 'Harry Potter';
    let books = await Book.findAll({
      // logging: false,
      // Generates: SELECT * FROM books WHERE title like '%testTitle%'
      where: {
        title: { [Op.regexp]: testTitle },
      },
    });
    expect(books).to.exist;
    expect(books).to.have.lengthOf.at.least(2);
    for (let book of books) {
      expect(book.title).to.contain(testTitle);
    }
  });

  it('Check Author associations lazily', async () => {
    let testTitle = 'A Savage Place';
    let book = await Book.findOne({
      logging: false,
      where: {
        title: testTitle,
      },
    });
    expect(book.getAuthor).to.exist;
    let author = await book.getAuthor({ logging: false });
    expect(author.lastName).to.equal('Parker');
  });

  it('Check Author associations eagerly', async () => {
    let testTitle = 'A Savage Place';
    let book = await Book.findOne({
      logging: false,
      where: {
        title: testTitle,
      },
      include: Author,
    });
    expect(book.author).to.exist;
    expect(book.author.lastName).to.equal('Parker');
  });

  it('Check Library associations lazily', async () => {
    let testTitle = 'A Savage Place';
    let book = await Book.findOne({
      logging: false,
      where: {
        title: testTitle,
      },
    });
    expect(book.getLibraries).to.exist;
    let libraries = await book.getLibraries({ logging: false });
    expect(libraries).to.have.lengthOf.at.least(2);
  });

  it('Check Library associations eagerly', async () => {
    let testTitle = 'A Savage Place';
    let book = await Book.findOne({
      logging: false,
      where: {
        title: testTitle,
      },
      include: Library,
    });
    expect(book.libraries).to.exist;
    expect(book.libraries).to.have.lengthOf.at.least(2);
  });
});
