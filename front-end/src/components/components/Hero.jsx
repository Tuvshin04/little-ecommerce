"use client";

import { Cards } from ".";
import { useState } from "react";

// Sample products data
const products = [
  {
    id: 1,
    name: "Cruiser Harley Davidson",
    price: 99827,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg",
    category: "Motorcycles",
  },
  {
    id: 2,
    name: "Engine Oil Filter",
    price: 29.99,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg",
    category: "Engine Parts",
  },
  {
    id: 3,
    name: "Brake Disk Rotor",
    price: 89.99,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg",
    category: "Brake System",
  },
  {
    id: 4,
    name: "Brake Disk Rotor",
    price: 1189.99,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg",
    category: "Brake System",
  },
];

const categories = [
  "All Products",
  "Engine Parts",
  "Brake System",
  "Suspension",
  "Electronics",
  "Body Parts",
];

export const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Auto Parts Market
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transform hover:-translate-y-2 transition-all duration-300"
            >
              <Cards product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
