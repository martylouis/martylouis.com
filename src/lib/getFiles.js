import fs from 'fs';
import path from 'path';

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'src/data', type));
}
