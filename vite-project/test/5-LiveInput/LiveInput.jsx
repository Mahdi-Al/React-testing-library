import React, { useState } from "react";

export default function LiveInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h2>{inputValue}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a text"
      />
    </div>
  );
}
