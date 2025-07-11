"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>

        {/* Navigation links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Categories</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          <Link href="/account">
            <span className="material-icons">person</span>
          </Link>
          <Link href="/cart">
            <span className="material-icons">shopping_cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
