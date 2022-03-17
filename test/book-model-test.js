const { Op } = require('sequelize');
const { Author, Book } = require('../orm/books/books-models');
const expect = require('chai').expect;

describe('Book Model', () => {
  it('Find at least one book', async () => {
    let books = await Book.findAll({ logging: false });
    expect(books).to.have.lengthOf.at.least(5);
  });

  it('Find some Books', async () => {
    let testTitle = 'Harry Potter';
    let books = await Book.findAll({
      logging: false,
      where: {
        title: { [Op.substring]: testTitle },
      },
    });
    expect(books).to.exist;
    expect(books).to.have.lengthOf.at.least(2);
  });

  it('Check associations lazily', async () => {
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

  it('Check associations eagerly', async () => {
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
});
