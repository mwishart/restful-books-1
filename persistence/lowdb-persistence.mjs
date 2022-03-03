import { join, dirname } from 'path';
import { JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import { BooksDAO } from './BooksDAO.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filename = 'books.json';

// Use JSON file for storage
const file = join(__dirname, filename);
const adapter = new JSONFile(file);
const dao = new BooksDAO(adapter);

await dao.read();
export { dao };
