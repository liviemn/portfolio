import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Desktop from "./components/Desktop";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <Desktop />
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
}