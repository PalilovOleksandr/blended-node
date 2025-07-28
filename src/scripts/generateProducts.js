import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';
import { readFileProducts } from '../utils/readFileProducts.js';

const generateProducts = async (count) => {
  try {
    const productData = await readFileProducts();
    for (let i = 0; i < count; i++) {
      const newProduct = createFakeProduct();
      productData.push(newProduct);
    }
    fs.writeFile(PATH_DB, JSON.stringify(productData, null, 2), 'utf-8');
    console.log(productData.length);
  } catch (err) {
    console.error(err);
  }
};

generateProducts(5);
