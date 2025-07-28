import { readFileProducts } from '../utils/readFileProducts.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_FILES_DIR } from '../constants/products.js';

const createProductsFiles = async () => {
  try {
    const productData = await readFileProducts();
    for (let product of productData) {
      const filePath = path.join(
        PATH_FILES_DIR,
        `${product['name'].split(' ').join('-').toLowerCase()}.json`,
      );
      await fs.writeFile(filePath, JSON.stringify(product, null, 2));
    }
  } catch (err) {
    console.error(err);
  }
};

createProductsFiles();
