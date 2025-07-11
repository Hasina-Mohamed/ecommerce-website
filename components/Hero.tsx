"use client";

import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Crafting Comfort, Redefining Spaces.
        <br />
        Your Home, Your Signature Style!
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Find the perfect pieces to complete your home decor and transform your space.
      </p>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for items..."
          className="px-4 py-2 border border-gray-300 rounded-l-md w-64"
        />
        <Button>Search</Button>
      </div>
    </section>
  );
}
