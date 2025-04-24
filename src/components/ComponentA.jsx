import { useState } from "react";
import ComponentB from "./ComponentB";
import { useDispatch } from "react-redux";
import { increaseCounterByValue } from "../redux/counterSlice";

const ComponentA = ({ count }) => {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Component A</h1>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(increaseCounterByValue(number))}>
        Increase counter by {number}
      </button>
      <ComponentB number={count} />
    </div>
  );
};

export default ComponentA;
