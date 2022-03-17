const { Op } = require('sequelize');
const { Address, Library } = require('../orm/books/books-models');
const expect = require('chai').expect;

describe('Library Model', () => {
  it('Find at least one Library', async () => {
    let libraries = await Library.findAll({ logging: false });
    expect(libraries).to.have.lengthOf.at.least(4);
  });

  it('Find a specific Library', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
    });
    expect(nutleyLibrary).to.exist;
  });

  it('Check associations lazily', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
    });
    expect(nutleyLibrary.getAddress).to.exist;
    let nutleyLibraryAddress = await nutleyLibrary.getAddress({
      logging: false,
    });
    expect(nutleyLibraryAddress).to.exist;
    expect(nutleyLibraryAddress.province).to.equal('NJ');
  });

  it('Check associations eagerly', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
      include: Address,
    });
    expect(nutleyLibrary.address).to.exist;
    expect(nutleyLibrary.address.province).to.equal('NJ');
  });
});
