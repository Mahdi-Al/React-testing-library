Given the following React component:

```jsx
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
```

Write a series of tests using @testing-library/react to verify the following:

1. The component renders an input element with the placeholder "Enter a text".
2. The component renders an h2 element.
3. When a user types into the input element, the h2 element displays the entered text.
