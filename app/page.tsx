import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryGrid from "@/components/CategoryGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid title="Featured Products" />
      <CategoryGrid />
      <ProductGrid title="Most Popular Products" />
      {/* You’d add the other sections here next */}
    </>
  );
}
