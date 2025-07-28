import { readFileProducts } from '../utils/readFileProducts.js';

export const getUniqueCategories = async () => {
  try {
    const productData = await readFileProducts();
    const nameProducts = productData.map((product) => product['category']);
    const filterProducts = nameProducts.filter(
      (category, i) => i === nameProducts.indexOf(category),
    );
    return filterProducts;
  } catch (err) {
    console.error(err);
  }
};

await getUniqueCategories();
