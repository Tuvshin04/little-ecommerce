"use client";

import { Footer, Header } from "../components";

export const AboutUs = () => {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Hero Auto Service
            </h1>
            <p className="text-lg text-gray-300">
              Providing quality auto parts and exceptional service since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Company History </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide our customers with the highest quality auto parts and
              exceptional service, ensuring their vehicles perform at their
              best. We strive to make auto maintenance accessible, reliable, and
              hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Products" },
              { number: "50+", label: "Brands" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
