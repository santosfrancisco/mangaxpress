import { ThemeProvider } from "styled-components";
import DatabaseProvider from "../context/databaseContext";
import { theme } from "../styles";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DatabaseProvider>
        <Component {...pageProps} />
      </DatabaseProvider>
    </ThemeProvider>
  );
}
