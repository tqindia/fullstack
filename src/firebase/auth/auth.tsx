import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import firebaseClient from "@/firebase/clientApp";

// Create authentication context
const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

// AuthProvider component to manage user authentication state
export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  // Set up authentication listener
  useEffect(() => {
    // Expose nookies to window object
    if (typeof window !== "undefined") {
      (window as any).nookies = nookies;
    }

    // Set up listener for user authentication changes
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        // If no user, clear user state and token
        setUser(null);
        nookies.destroy(null, "token");
        nookies.set(null, "token", "", { path: "/" });
        return;
      }

      // Get user token and update user state
      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, "token");
      nookies.set(null, "token", token, { path: "/" });
    });
  }, []);

  // Refresh token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  // Provide authentication context value to children components
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
