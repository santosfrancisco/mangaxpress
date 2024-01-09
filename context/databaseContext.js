import { useState, useEffect, createContext, useContext } from "react";
import { createFirebaseApp } from "../firebase/clientApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

export const DatabaseContext = createContext();

export default function DatabaseContextComp({ children }) {
  const [database, setDatabase] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const app = createFirebaseApp();
    const db = getDatabase(app);

    try {
      if (db) {
        const dbRef = ref(db, "/");
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          console.log("🚀 ~ onValue ~ data:", data);
          setDatabase(data);
        });
      } else setDatabase(null);
    } catch (error) {
      // Most probably a connection error. Handle appropriately.
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <DatabaseContext.Provider value={{ database, isLoading }}>
      {children}
    </DatabaseContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useDatabase = () => useContext(DatabaseContext);
