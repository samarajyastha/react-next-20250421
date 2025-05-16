import { getProducts } from "@/api/products";
import ProductCard from "@/components/products/Card";
import ProductFilters from "@/components/products/Filters";

export const metadata = {
  title: "Products",
};

async function ProductsPage({ searchParams }) {
  const response = await getProducts(await searchParams);

  const products = response?.data;

  return (
    <section>
      <h1 className="text-4xl font-semibold">Popular products</h1>
      <ProductFilters />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
