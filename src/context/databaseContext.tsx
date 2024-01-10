import { useState, useEffect, createContext, useContext } from "react";
import { createFirebaseApp } from "../../firebase/clientApp";
import { getDatabase, ref, onValue } from "firebase/database";

type LatestRelease = {
  description: string;
  force: boolean;
  link: string;
  version: string;
};

type Database = {
  features: Record<string, boolean>;
  latest: LatestRelease;
};

type DatabaseContext = {
  database: Database | null;
  isLoading: boolean;
};

export const DatabaseContext = createContext<DatabaseContext>({
  database: null,
  isLoading: false,
});

export default function DatabaseContextComp({ children }) {
  const [database, setDatabase] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    const app = createFirebaseApp();
    const db = getDatabase(app);

    try {
      if (db) {
        const dbRef = ref(db, "/");
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
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
