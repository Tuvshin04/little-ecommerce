"use client";

import { useState } from "react";

export const Cards = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:max-w-[300px] bg-white rounded-lg sm:rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full  overflow-hidden bg-gray-100">
        <img
          src={
            product?.image ||
            "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-heritage-classic-114/2024-heritage-classic-114-m15b/2024-heritage-classic-114-m15b-motorcycle.jpg"
          }
          alt={product?.name || "Product Image"}
          className="  object-fill transition-transform duration-500 group-hover:scale-105"
          loading="lazy "
        />

        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
          <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold bg-black/80 text-white rounded-full">
            {product?.category || "Product"}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 space-y-2 sm:space-y-4">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product?.name || "Cruiser Harley Davidson"}
          </h2>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ${product?.price?.toLocaleString() || "99,827"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
