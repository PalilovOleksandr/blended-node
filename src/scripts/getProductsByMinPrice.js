import { readFileProducts } from '../utils/readFileProducts.js';

const getProductsByMinPrice = async (price) => {
  try {
    const productData = await readFileProducts();
    const filterProducts = productData.filter(
      (product) => product['price'] >= price,
    );
    return filterProducts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getProductsByMinPrice(100));
