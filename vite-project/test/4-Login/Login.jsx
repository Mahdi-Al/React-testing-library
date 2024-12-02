import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("login");

  const handleClick = () => setLogin(login === "login" ? "logout" : "login");
  return <button onClick={handleClick}>{login}</button>;
}
