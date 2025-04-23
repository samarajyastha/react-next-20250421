import ComponentC from "./ComponentC";

const ComponentB = ({ number = 0 }) => {
  return (
    <div>
      <h2>Square: {number * number}</h2>
      <ComponentC number={number} />
    </div>
  );
};

export default ComponentB;
