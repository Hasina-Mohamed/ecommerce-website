import Image from "next/image";

type ProductCardProps = {
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  imageUrl: string;
};

export default function ProductCard({
  title,
  price,
  oldPrice,
  discount,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="relative border rounded overflow-hidden shadow hover:shadow-lg transition">
      {discount && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {discount}
        </span>
      )}
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={500}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex gap-2 items-center">
          {oldPrice && (
            <span className="text-gray-500 line-through">${oldPrice}</span>
          )}
          <span className="text-primary font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
}
