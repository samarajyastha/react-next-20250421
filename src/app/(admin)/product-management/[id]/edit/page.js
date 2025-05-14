import { getCategories, getProductById } from "@/api/products";
import ProductForm from "@/components/products/Form";

async function EditProductPage({ params }) {
  const id = (await params).id;

  const response = await getProductById(id);

  const categoriesResponse = await getCategories();

  return (
    <section>
      <div className="py-5 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit <span className="italic">{response.data?.name}</span>
        </h2>
        <ProductForm
          id={id}
          product={response.data}
          categories={categoriesResponse.data}
        />
      </div>
    </section>
  );
}

export default EditProductPage;
