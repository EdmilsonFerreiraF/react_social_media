import { useState, useEffect } from "react"
import axios from "axios"
import { useErrorHandler } from 'react-error-boundary'

export function useRequestData(url: string, initialState: any) {
  const [data, setData] = useState(initialState)
  const handleError = useErrorHandler()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (url) {
      axios.get(url, {
        headers: {
          Authorization: token as string
        }
      }).then((response) => {
        setData(response.data);
      }).catch((error) => {
        if (error.message.includes("401")) {
          localStorage.removeItem("token")
        }
        
        handleError(error)
      })

      return function cleanup() {
        setData(initialState)
      }
    }

    return
  }, [url])

  return data
}