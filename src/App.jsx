import { useRef, useState } from "react";
import Title from "./components/Title";
import { useEffect } from "react";
import ComponentA from "./components/ComponentA";

function App() {
  const [count, setCount] = useState(10);

  const ref = useRef();

  useEffect(() => {
    console.log("hello");
    // console.log(ref.current);
  }, [count]);

  return (
    <div ref={ref}>
      <ComponentA count={count} />
      <Title label={"This is title"} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
