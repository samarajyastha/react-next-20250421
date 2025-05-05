import BackButton from "./_components/BackButton";
import Image from "next/image";
import { getProductById } from "@/api/products";
import Markdown from "react-markdown";

async function ProductByIdPage({ params }) {
  const productId = (await params).productId;

  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });

  const product = response?.data;

  return (
    <div className="py-8">
      <BackButton />
      <div className="flex flex-col items-center justify-center py-10">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={1000}
          width={1000}
        />

        <div className="py-8 flex gap-5">
          {product.imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={product.name}
              height={64}
              width={64}
              className="p-1 bg-slate-800"
            />
          ))}
        </div>

        <div>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            {product.category}
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
            {product?.brand}
          </span>
        </div>
        <h1 className="py-3 text-5xl font-semibold">{product.name}</h1>
        <h3 className="text-2xl">Rs. {product.price}</h3>

        <Markdown>{product.description}</Markdown>
      </div>
    </div>
  );
}

export default ProductByIdPage;
