"use client";

import { useState } from 'react';

export const Cards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full max-w-[300px] bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg?impolicy=myresize&rw=500"
          alt="Harley Davidson Motorcycle"
          className="object-fit w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
            Product
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2">
            Cruiser Harley Davidson
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">$99,827</span>
          </div>
        </div>

        <div className="pt-2">
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-800 active:bg-gray-900">
            Шоппинг карт д нэмэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
