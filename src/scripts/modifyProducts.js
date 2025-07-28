import { PATH_DB } from '../constants/products.js';
import { readFileProducts } from '../utils/readFileProducts.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
  try {
    const productData = await readFileProducts();
    const notDescrArr = productData.map(({ description, ...rest }) => rest);
    fs.writeFile(PATH_DB, JSON.stringify(notDescrArr, null, 2), 'utf-8');
  } catch (err) {
    console.error(err);
  }
};

modifyProducts();
