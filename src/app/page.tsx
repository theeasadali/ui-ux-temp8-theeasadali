import ButtonText from "./components/buttonText";
import Category from "./components/category";
import Product from "./components/product";
import Product2 from "./components/product-2";
import ProductBig from "./components/product-big";
import CartItem from "./components/cart-item";
import Hero from "./components/hero";
import LogosSection from "./components/logos-section";
import FeaturedSection from "./components/featured-section";
import CategorySection from "./components/category-section";
import StylesSection from "./components/styles-section";
import AllProductsSection from "./components/all-products-section";

export default function Home() {  
  return (
    <>
      <Hero/>
      <LogosSection/>
      <FeaturedSection/>
      <CategorySection/>
      <StylesSection/>
      <AllProductsSection/>
    </>
  );
}
