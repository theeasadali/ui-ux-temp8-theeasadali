import ButtonText from "./components/buttonText";
import Category from "./components/category";
import Product from "./components/product";
import Product2 from "./components/product-2";
import ProductBig from "./components/product-big";
import CartItem from "./components/cart-item";
import Hero from "./components/hero";
import LogosSection from "./components/logos-section";

export default function Home() {
  interface Product {
    id: number;
    name: string;
    category: string;
    featured: boolean;
    label?: "New" | "Sale"; // Optional, allows flexibility
    price: number;
    quantity: number;
    size: string; // Example: "Small", "Medium", "Large"
    description: string;
    image: string; // URL to product image
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Classic Wooden Chair",
      category: "Wooden Chair",
      featured: true,
      label: "New",
      price: 120.99,
      quantity: 25,
      size: "Medium",
      description: "A timeless wooden chair crafted for comfort and style.",
      image: "/img/wooden-chair.jpg",
    },
    {
      id: 2,
      name: "Ergonomic Desk Chair",
      category: "Desk Chair",
      featured: true,
      price: 199.49,
      quantity: 15,
      size: "Adjustable",
      description: "Designed for long working hours with excellent lumbar support.",
      image: "/images/desk-chair.jpg",
    },
    {
      id: 3,
      name: "Luxurious Wing Chair",
      category: "Wing Chair",
      featured: false,
      label: "Sale",
      price: 329.99,
      quantity: 10,
      size: "Large",
      description: "A high-back wing chair for elegant living spaces.",
      image: "/images/wing-chair.jpg",
    },
    {
      id: 4,
      name: "Compact Recliner Chair",
      category: "Recliner Chair",
      featured: false,
      price: 249.00,
      quantity: 5,
      size: "Medium",
      description: "A space-saving recliner perfect for modern apartments.",
      image: "/images/recliner-chair.jpg",
    },
    {
      id: 5,
      name: "Stylish Armchair",
      category: "Armchair",
      featured: true,
      price: 180.75,
      quantity: 20,
      size: "Small",
      description: "A sleek armchair to add charm to your living room.",
      image: "/images/armchair.jpg",
    },
    {
      id: 6,
      name: "Modern Lounge Chair",
      category: "Lounge Chair",
      featured: false,
      price: 310.99,
      quantity: 8,
      size: "Large",
      description: "A comfortable lounge chair with a contemporary design.",
      image: "/images/lounge-chair.jpg",
    },
    {
      id: 7,
      name: "Vintage Wooden Rocker",
      category: "Wooden Chair",
      featured: true,
      price: 145.89,
      quantity: 12,
      size: "Large",
      description: "A classic wooden rocking chair for relaxing evenings.",
      image: "/images/wooden-rocker.jpg",
    },
    {
      id: 8,
      name: "Premium Recliner Chair",
      category: "Recliner Chair",
      featured: true,
      label: "New",
      price: 400.00,
      quantity: 6,
      size: "Extra Large",
      description: "A premium recliner with adjustable headrest and footrest.",
      image: "/images/premium-recliner.jpg",
    },
    {
      id: 9,
      name: "Comfortable Dining Chair",
      category: "Dining Chair",
      featured: false,
      price: 89.99,
      quantity: 30,
      size: "Medium",
      description: "A comfortable and elegant chair for your dining table.",
      image: "/images/dining-chair.jpg",
    },
    {
      id: 10,
      name: "Office Executive Chair",
      category: "Desk Chair",
      featured: true,
      label: "Sale",
      price: 220.00,
      quantity: 10,
      size: "Adjustable",
      description: "An executive chair designed for maximum productivity.",
      image: "/images/executive-chair.jpg",
    },
  ];
  
  return (
    <>
      <Hero/>
      <LogosSection/>
      {/* <Product title="Classic Wooden Chair" label="New" image="/img/Image.png" price={20} />
      <Category />
      <Product2/>
      <ButtonText/>
      <ProductBig/>
      <CartItem/> */}
    </>
  );
}
