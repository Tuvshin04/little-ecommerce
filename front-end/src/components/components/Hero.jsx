"use client";

import { Cards } from ".";
// import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Products
          </h1>
          <div className="hidden sm:flex items-center gap-4">
            <div className="h-1 w-32 bg-gradient-to-r from-gray-200 to-transparent rounded-full" />
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <Cards />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;