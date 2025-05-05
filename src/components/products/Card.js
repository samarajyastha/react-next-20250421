import Image from "next/image";

import placeholder from "@/assets/images/product-placeholder.jpeg";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <div className="w-full h-max rounded-2xl dark:shadow dark:shadow-amber-50 px-5 py-4">
      <Link href={`/products/${product.id}`}>
        <div className="flex justify-center min-h-30">
          <Image
            height={500}
            width={500}
            src={product.imageUrls[0] ?? placeholder}
            alt="img"
            className="w-auto max-h-40"
          />
        </div>
      </Link>
      <div className="py-3">
        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {product.category}
        </span>
        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product?.brand}
        </span>
        <Link href={`/products/${product.id}`}>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
        </Link>
        <p className="py-2">Rs. {product.price}</p>
        <button className="rounded shadow dark:shadow-white px-4 py-1 dark:bg-zinc-900">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
