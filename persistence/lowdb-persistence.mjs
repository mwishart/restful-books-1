import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import * as lodash from 'lodash-es';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filename = 'books.json';

class LowWithLodash extends Low {
  chain = lodash.chain(this).get('data');
}

// Use JSON file for storage
const file = join(__dirname, filename);
const adapter = new JSONFile(file);
const db = new LowWithLodash(adapter);

await db.read();

db.data ||= { books: [], authors: [] };
