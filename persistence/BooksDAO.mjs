import { Low } from 'lowdb';
import * as lodash from 'lodash-es';

/**
 * @extends {Low}
 */
class LowWithLodash extends Low {
  chain = lodash.chain(this).get('data');
}

export class BooksDAO {
  /** @private */
  #db = null;

  /**
   * @template T
   * @param { import('lowdb').Adapter<T>} adapter
   */
  constructor(adapter) {
    this.#db = new LowWithLodash(adapter);
  }

  async read() {
    await this.#db.read();

    this.#db.data ||= { books: [], authors: [] };
  }

  /**
   *
   * @param {'books'|'authors'} collection
   * @param {object} criteria
   * @returns object
   */
  find(collection = 'books', criteria) {
    if (!criteria) {
      return this.#db.data[collection][0];
    } else {
      return this.#db.chain.get(collection).find(criteria).value();
    }
  }

  /**
   *
   * @param {'books'|'authors'} collection
   * @param {object} criteria
   * @param {boolean} partial
   * @returns {object[]}
   * @see {@link https://lodash.com/docs/4.17.15#matches}
   */
  findAll(collection = 'books', criteria, partial = false) {
    // No criteria? You get the whole collection
    if (!criteria) {
      // Return a copy of the array, not a reference!
      return [...this.#db.data[collection]];
      // No partial matching? We can use lodash's matches() method
    } else if (!partial) {
      return [
        ...this.#db.chain
          .get(collection)
          .filter(lodash.matches(criteria))
          .value(),
      ];
      // And now things get complicated
    } else {
      let results = this.#db.chain.get(collection);
      let criteriaEntries = Object.entries(criteria);
      return results
        .filter((item) => {
          // If any value in every() returns false, this returns false
          // and the item isn't in the filtered results
          // If all values in every return true, this returns true
          // and the item IS in the filtered results
          return criteriaEntries.every(([key, value]) => {
            if (item[key]) {
              // true if value contains criteria[key] case insensitively
              return new RegExp(value, 'i').test(item[key]);
            }
          });
        })
        .value();
    }
  }

  findBooks(criteria, partial = false) {
    return this.findAll('books', criteria, partial);
  }

  findBookById(id) {
    if (typeof id !== 'string') {
      id = String(id);
    }
    return this.#db.chain.get('books').find({ id }).value();
  }
}
