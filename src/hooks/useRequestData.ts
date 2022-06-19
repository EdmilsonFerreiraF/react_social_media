import {
  useState,
  useEffect
} from "react"
import axios from "axios"
import { useErrorHandler } from "react-error-boundary"

export function useRequestData(
  url: string | null,
  initialState: any,
  ) {
const handleError = useErrorHandler()

  const [data, setData] = useState(initialState)
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
    }

  }, [url,
    handleError
  ])

  return data
}