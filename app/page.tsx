import Product from "./components/product/Product";
import FrequentAnswrsAndQuestions from "./components/ui/F&Q/FrequentAnswrsAndQuestions";
import Contact from "./components/ui/contact/Contact";
import Features from "./components/ui/features/Features";
import Hero from "./components/ui/header/Hero";
import Parallax from "./components/ui/parallax/Parallax";
import { getProducts } from "@/utils/fetchStripeProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <Features />
      <Parallax />
      <>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </>
      <FrequentAnswrsAndQuestions />
      <Contact />
    </>
  );
}
