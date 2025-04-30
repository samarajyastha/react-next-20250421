import BackButton from "./_components/BackButton";

async function ProductByIdPage({ params }) {
  const productId = (await params).productId;

  return (
    <div>
      <BackButton />
      <h1 className="py-5 text-3xl">Get product of id: {productId}</h1>
    </div>
  );
}

export default ProductByIdPage;
