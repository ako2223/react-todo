import React from "react";

function Number({ numberState, setNumberState }) {
  const increamentNumber = () => {
    setNumberState(numberState + 1);
  };

  const dicreamentNumber = () => {
    setNumberState(numberState - 1);
  };

  return (
    <div>
      <p>{numberState}</p>
      <button onClick={dicreamentNumber}>dicreament</button>
      <button onClick={increamentNumber}>increament</button>
    </div>
  );
}

export default Number;
