import Image from "next/image";

export default function CategoryGrid() {
  const categories = [
    { name: "Bedroom Furniture", imageUrl: "/images/gray-placeholder.jpg" },
    { name: "Living Room Furniture", imageUrl: "/images/gray-placeholder.jpg" },
    { name: "Dining Room Furniture", imageUrl: "/images/gray-placeholder.jpg" },
    { name: "Sofa Sets", imageUrl: "/images/gray-placeholder.jpg" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        View Our Range of Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative h-60 rounded overflow-hidden"
          >
            <Image
              src={cat.imageUrl}
              alt={cat.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
