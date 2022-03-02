import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filename = 'books.json';

// Use JSON file for storage
const file = join(__dirname, filename);
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { books: [], authors: [] };
