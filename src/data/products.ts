export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  alt: string;
};

// Images are imported in pages/components where needed to enable code-splitting
export const categories = [
  "Produce",
  "Bakery",
  "Dairy",
  "Beverages",
  "Grains",
] as const;

export const products: Product[] = [
  {
    id: "apples",
    name: "Fresh Red Apples (1kg)",
    description: "Crisp, juicy apples sourced daily from local farms.",
    price: 120,
    category: "Produce",
    image: "./assets/products/apples.jpg",
    alt: "Fresh red apples in a basket",
  },
  {
    id: "bananas",
    name: "Organic Bananas (1kg)",
    description: "Naturally sweet and perfect for snacking.",
    price: 60,
    category: "Produce",
    image: "./assets/products/bananas.jpg",
    alt: "Bunch of organic bananas",
  },
  {
    id: "bread",
    name: "Whole Wheat Bread",
    description: "Soft, freshly baked loaf made with whole grains.",
    price: 45,
    category: "Bakery",
    image: "./assets/products/bread.jpg",
    alt: "Loaf of whole wheat bread",
  },
  {
    id: "milk",
    name: "Fresh Milk (1L)",
    description: "Creamy and pure — perfect for tea, coffee, and cereal.",
    price: 58,
    category: "Dairy",
    image: "./assets/products/milk.jpg",
    alt: "Bottle of fresh milk",
  },
  {
    id: "orange-juice",
    name: "Orange Juice (1L)",
    description: "Refreshing, pulpy orange juice with no added sugar.",
    price: 110,
    category: "Beverages",
    image: "./assets/products/orange-juice.jpg",
    alt: "Bottle of orange juice with oranges",
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice (5kg)",
    description: "Long-grain aromatic basmati rice for everyday meals.",
    price: 520,
    category: "Grains",
    image: "./assets/products/rice.jpg",
    alt: "Sack of basmati rice with bowl",
  },
];
