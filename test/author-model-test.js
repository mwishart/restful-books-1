const { Author, Book } = require('../orm/books/books-models');
const expect = require('chai').expect;

describe('Author Model', () => {
  it('Find at least one Author', async () => {
    let authors = await Author.findAll({ logging: false });
    expect(authors).to.have.lengthOf.at.least(5);
  });

  it('Find a specific Author', async () => {
    let testLastName = 'Steinbeck';
    let author = await Author.findOne({
      logging: false,
      where: {
        lastName: testLastName,
      },
    });
    expect(author).to.exist;
    expect(author.lastName).to.equal(testLastName);
    expect(author.firstName).to.equal('John');
  });

  it('Check associations lazily', async () => {
    let testLastName = 'Steinbeck';
    let author = await Author.findOne({
      logging: false,
      where: {
        lastName: testLastName,
      },
    });
    expect(author.getBooks).to.exist;
    let books = await author.getBooks({ logging: false });
    expect(books).to.have.lengthOf.at.least(1);
  });

  it('Check associations eagerly', async () => {
    let testLastName = 'Melville';
    let author = await Author.findOne({
      logging: false,
      where: {
        lastName: testLastName,
      },
      include: Book,
    });
    expect(author.books).to.exist;
    expect(author.books).to.have.lengthOf.at.least(1);
    expect(author.books[0].title).to.contain('Moby-Dick');
  });
});
