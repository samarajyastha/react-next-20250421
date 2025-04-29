async function ProductByIdPage({ params }) {
  const productId = (await params).productId;

  return <div>Get product of id: {productId}</div>;
}

export default ProductByIdPage;
