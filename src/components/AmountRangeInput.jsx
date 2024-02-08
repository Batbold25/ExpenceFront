import React from "react";

import React, { useState } from "react";

export const AmountRangeInput = () => {
  const [amountRange, setAmountRange] = useState([0, 100]); // Initial range

  const handleAmountChange = (index, event) => {
    const newValue = parseInt(event.target.value);
    setAmountRange((prevRange) => {
      const newRange = [...prevRange]; // Create a copy of the current range array
      newRange[index] = newValue; // Update the value at the specified index
      return newRange;
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min="0"
        max="100"
        value={amountRange[0]}
        onChange={(event) => handleAmountChange(0, event)}
        className="w-1/2"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={amountRange[1]}
        onChange={(event) => handleAmountChange(1, event)}
        className="w-1/2"
      />
    </div>
  );
};
