import BackButton from "./_components/BackButton";
import Image from "next/image";
import Markdown from "react-markdown";
import { getProductById } from "@/api/products";

async function getById(params) {
  const productId = (await params).productId;

  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });

  return response?.data;
}

export const generateMetadata = async ({ params }) => {
  const product = await getById(params);

  return {
    title: {
      absolute: product.name,
    },
    keywords: `${product?.brand},${product.category}`,
  };
};

async function ProductByIdPage({ params }) {
  const product = await getById(params);

  return (
    <div>
      <h1 className="text-5xl font-semibold">{product.name}</h1>

      <div className="flex flex-col items-center justify-center py-10">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={1000}
          width={1000}
          className="max-h-[70vh] w-full object-cover"
        />

        <div className="py-8 flex gap-5">
          {product.imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={product.name}
              height={64}
              width={64}
              className="shadow-md"
            />
          ))}
        </div>

        <div className="py-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
            {product.category}
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
            {product?.brand}
          </span>
        </div>
        <h3 className="text-2xl">Rs. {product.price}</h3>

        <div className="my-5 border-t py-3">
          <Markdown>{product.description}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default ProductByIdPage;
