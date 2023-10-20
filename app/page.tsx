import Product from "./components/product/Product";
import Features from "./components/ui/features/Features";
import Hero from "./components/ui/header/Hero";
import Parallax from "./components/ui/parallax/Parallax";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Parallax />
      <Product />
    </>
  );
}
