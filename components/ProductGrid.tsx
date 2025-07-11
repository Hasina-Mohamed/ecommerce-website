import ProductCard from "./ProductCard";

export default function ProductGrid({
  title,
}: {
  title: string;
}) {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <ProductCard
          title="Elegant Sofa"
          price={450}
          oldPrice={600}
          discount="-25%"
          imageUrl="/images/product-placeholder.jpg"
        />
        <ProductCard
          title="Modern Chair"
          price={120}
          imageUrl="/images/product-placeholder.jpg"
        />
        <ProductCard
          title="Wooden Table"
          price={300}
          oldPrice={350}
          discount="-15%"
          imageUrl="/images/product-placeholder.jpg"
        />
        <ProductCard
          title="Cozy Bed"
          price={700}
          oldPrice={800}
          discount="-12%"
          imageUrl="/images/product-placeholder.jpg"
        />
      </div>
    </section>
  );
}
