import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { AuthContextProvider } from "context/AuthContext"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ErrorFallback from 'components/ErrorFallback'

import { ErrorBoundary } from 'react-error-boundary'

import Error from 'pages/Error'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => console.log({ error, errorInfo })}
      >
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);