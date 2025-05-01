function ProductsLayout({ children }) {
  return (
    <div className="max-w-screen-xl container mx-auto p-4">
      <h1 className="text-4xl font-semibold">Products Page</h1>

      {children}
    </div>
  );
}

export default ProductsLayout;
