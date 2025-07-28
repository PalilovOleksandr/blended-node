import { readFileProducts } from '../utils/readFileProducts.js';
import { getUniqueCategories } from './getUniqueCategories.js';

const groupProductsByCategories = async () => {
  try {
    const sortedProducts = {};
    const productData = await readFileProducts();
    const categoryProducts = await getUniqueCategories();
    for (let i = 0; i < categoryProducts.length; i++) {
      const categoryName = categoryProducts[i];
      const nameArr = productData.filter(
        (product) => product['category'] === categoryName,
      );
      sortedProducts[categoryName] = nameArr.map((product) => product['name']);
    }
    return sortedProducts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await groupProductsByCategories());
