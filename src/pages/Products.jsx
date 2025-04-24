import { useSelector } from "react-redux";

const Products = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Products page</h1>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default Products;
