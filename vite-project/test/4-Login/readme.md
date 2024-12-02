Given the following React component:

```jsx
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("login");

  const handleClick = () => setLogin(login === "login" ? "logout" : "login");
  return <button onClick={handleClick}>{login}</button>;
}
```

Write a series of tests using @testing-library/react to verify the following:

1. The component renders a button. hint: use .toBeInTheDocument()
2. The button displays "login" as its initial text.
3. The button text changes to "logout" when clicked.
