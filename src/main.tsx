import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

import App from "App";
import ErrorFallback from "components/ErrorFallback";
import { AuthContextProvider } from "context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          console.log(error, errorInfo);
        }}
      >
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </AuthContextProvider>
  </React.StrictMode>
);
