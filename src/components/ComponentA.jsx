import ComponentB from "./ComponentB";

const ComponentA = ({ count }) => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB number={count} />
    </div>
  );
};

export default ComponentA;
