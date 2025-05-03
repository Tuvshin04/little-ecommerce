import { Menu } from "../svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-slate-900">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h4 className="text-3xl font-bold rounded-lg border-2 border-gray-300 p-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Hero Auto Service
            </h4>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden text-white hover:text-gray-300 transition-colors">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};
