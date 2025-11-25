import { useState, useEffect } from "react";
import { userStorage } from "../storage";

export function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!userStorage.get());

  useEffect(() => {
    // Listen for storage updates
    const handler = () => {
      setIsLoggedIn(!!userStorage.get());
    };

    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  }, []);

  return { isLoggedIn, isLoading: false };
}
