import ProductCard from "@/components/products/Card";
import axios from "axios";

async function ProductsPage() {
  const response = await axios.get(
    "https://ecommerce-test-api-green.vercel.app/api/products"
  );

  const products = response?.data;

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;
