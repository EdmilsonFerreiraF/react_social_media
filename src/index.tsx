import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from 'App'
import { AuthContextProvider } from "context/AuthContext"
import ErrorFallback from 'components/ErrorFallback'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={
          (
            error,
            errorInfo
          ) => {

            console.log(error, errorInfo)
          }
        }
      >
        <QueryClientProvider client={queryClient}>

          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)