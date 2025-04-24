import { useDispatch, useSelector } from "react-redux";
import ComponentA from "../components/ComponentA";
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from "../redux/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.count); // To get state data
  const dispatch = useDispatch(); // To dispatch actions

  return (
    <div>
      <h1>Home page</h1>
      <h3>Count: {count}</h3>
      <ComponentA count={count} />
      <button onClick={() => dispatch(increaseCounter())}>
        Increase counter
      </button>
      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease counter
      </button>
      <button onClick={() => dispatch(resetCounter())}>Reset counter</button>
    </div>
  );
};

export default Home;
