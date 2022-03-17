const { Op } = require('sequelize');
const { Address, Library, Book } = require('../orm/books/books-models');
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

  it('Check Address association lazily', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
    });
    expect(nutleyLibrary.getAddress).to.exist;
    let nutleyLibraryInventory = await nutleyLibrary.getAddress({
      logging: false,
    });
    expect(nutleyLibraryInventory).to.exist;
    expect(nutleyLibraryInventory.province).to.equal('NJ');
  });

  it('Check Address association eagerly', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
      include: Address,
    });
    expect(nutleyLibrary.address).to.exist;
    expect(nutleyLibrary.address.province).to.equal('NJ');
  });

  it('Check Books association lazily', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
    });
    expect(nutleyLibrary.getInventory).to.exist;
    let nutleyLibraryInventory = await nutleyLibrary.getInventory({
      logging: false,
    });
    expect(nutleyLibraryInventory).to.exist;
    expect(nutleyLibraryInventory).to.have.lengthOf.at.least(2);
  });

  it('Check Books association eagerly', async () => {
    let nutleyLibrary = await Library.findOne({
      logging: false,
      where: { name: { [Op.substring]: 'Nutley' } },
      include: { model: Book, as: 'inventory' },
    });
    expect(nutleyLibrary.inventory).to.exist;
    expect(nutleyLibrary.inventory).to.have.lengthOf.at.least(2);
  });
});
