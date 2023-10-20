import Stripe from "stripe";

export const getProducts = async () => {
  const stripe = new Stripe(process.env.NEXT_SECRET_PRIVATE_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const products = await stripe.products.list();

  const allProducts = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
      };
    })
  );
  return allProducts;
};
