export interface Product {
    id: number;
    name: string;
    category: string;
    featured: boolean;
    label?: "New" | "Sales"; // Optional, allows flexibility
    price: number;
    quantity: number;
    size: string; // Example: "Small", "Medium", "Large"
    description: string;
    image: string; // URL to product image
  }