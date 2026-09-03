import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import Desktop from "./components/Desktop";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  const [screen, setScreen] = useState<"login" | "loading" | "desktop">("login");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(screen != "loading") return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [screen]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setScreen("desktop");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (screen === "login") {
    return (
      <LoginPage
        onLogin={() => setScreen("loading")}
      />
    );
  }

  if (screen === "loading") {
    return <LoadingPage progress={progress} />;
  }

  return <Desktop />;

}