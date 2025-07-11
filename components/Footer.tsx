"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My E-commerce Website. All rights reserved.
      </div>
    </footer>
  );
}
