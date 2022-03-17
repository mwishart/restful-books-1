const { Address, Library } = require('../orm/books/books-models');
const expect = require('chai').expect;

describe('Address Model', () => {
  it('Find at least one Address', async () => {
    let addresses = await Address.findAll({ logging: false });
    expect(addresses).to.have.lengthOf.at.least(4);
  });

  it('Find a specific Address', async () => {
    let nutleyAddress = await Address.findOne({
      logging: false,
      where: { province: 'NJ' },
    });
    expect(nutleyAddress).to.exist;
    expect(nutleyAddress.province).to.equal('NJ');
  });

  it('Check associations lazily', async () => {
    let nutleyAddress = await Address.findOne({
      where: { province: 'NJ' },
      logging: false,
    });
    let nutleyLibrary = await nutleyAddress.getLibrary({ logging: false });
    expect(nutleyLibrary).to.exist;
    expect(nutleyLibrary.name).to.contain('Nutley');
  });

  it('Check associations eagerly', async () => {
    let nutleyAddress = await Address.findOne({
      where: { province: 'NJ' },
      include: Library,
      logging: false,
    });

    expect(nutleyAddress.library).to.exist;
    expect(nutleyAddress.library.name).to.contain('Nutley');
  });
});
