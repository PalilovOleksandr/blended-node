import { readFileProducts } from '../utils/readFileProducts.js';

const getProductsByMinPrice = async (price) => {
  const productData = await readFileProducts();
  try {
  } catch (err) {
    console.error(err);
  }
};

console.log(getProductsByMinPrice(100));
