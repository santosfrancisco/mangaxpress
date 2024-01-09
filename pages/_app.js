import UserProvider from "../context/userContext";
import DatabaseProvider from "../context/databaseContext";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <DatabaseProvider>
        <Component {...pageProps} />
      </DatabaseProvider>
    </UserProvider>
  );
}
