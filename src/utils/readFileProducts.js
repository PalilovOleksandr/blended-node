import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readFileProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};
