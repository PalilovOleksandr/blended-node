import { readFileProducts } from '../utils/readFileProducts.js';

const getTotalPrice = async () => {
  try {
    const productData = await readFileProducts();
    const totalprice = productData.reduce(
      (acc, product) => acc + Number(product['price']),
      0,
    );
    return totalprice;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getTotalPrice());
