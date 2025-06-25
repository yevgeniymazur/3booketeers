import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Create the context
const AuthContext = createContext();

// Custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // done checking auth
    });

    return unsubscribe;
  }, []);

  // Wait for auth to finish loading before rendering the app
  return (
    <AuthContext.Provider value={{ user }}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
}