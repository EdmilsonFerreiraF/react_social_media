import { useState, useEffect } from "react";
import axios from "axios";
import { useErrorHandler } from 'react-error-boundary'

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);
  const handleError = useErrorHandler()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (url) {
      console.log('url - useRequestData', url)
      axios.get(url, {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        console.log('response - requestdata', response)
        setData(response.data);
      }).catch((error) => {
        console.log(error.message);
        if (error.message.includes("401")) {
          localStorage.removeItem("token")
        }
        handleError(error)
      });
      console.log('url', url)
      return function cleanup() {
        setData(initialState)
  
      }
    }
  }, [url]);

  return data;
}