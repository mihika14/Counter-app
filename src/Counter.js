import React, { useState, useEffect } from "react";
import "./Counter.css";
import Swal from "sweetalert2";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [CountHigh, setCountHigh] = useState(false);

  useEffect(() => {
    if (count > 7) {
      setCountHigh(true);
      Swal.fire({
        title: "Count Exceeded 7",
        icon: "error",
        confirmButtonText: 'Click here to continue'
      });
    } else {
      setCountHigh(false);
    }
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <p>Initial Count: {count}</p>
      <button class="c-button" onClick={increase}>
        <span class="c-main">
          <span class="c-ico">
            <span class="c-blur"></span> <span class="ico-text">+</span>
          </span>
          Add
        </span>
      </button>
    </div>
  );
}

export default Counter;
