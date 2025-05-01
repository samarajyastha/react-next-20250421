"use client";
import { useState } from "react";

function AuthTemplate({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="py-5">
        <input type="text" className="border-2 border-white" />
      </div>
      <div className="py-5">
        <h1 className="text-3xl">Count: {count}</h1>
      </div>

      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-white"
      >
        Click
      </button>

      {children}
    </div>
  );
}

export default AuthTemplate;
