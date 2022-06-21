import {
  useState,
  useEffect
} from "react"
import axios from "axios"
import { useErrorHandler } from "react-error-boundary"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"

import { goToLogin } from "routes/coordinator"

export const useData = (
  data: any
) => {
  const { data: res }: { data: any } = useQuery(
    "posts", () => data
  )

  return res
}

export function useRequestData(
  url: string | null,
  initialState: any,
) {
  const handleError = useErrorHandler()
  const navigate = useNavigate()

  const [data, setData] = useState(initialState)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (url) {
      axios.get(url, {
        headers: {
          Authorization: token as string
        }
      }).then((response) => {
        setData(response.data)
      }).catch((error) => {
        const errorData = error as any
        const { data: { message } } =
          errorData.response

        if (message === "jwt expired") {
          localStorage.removeItem('token')

          goToLogin(navigate)
        }

        if (message === "invalid token") {
          localStorage.removeItem('token')

          goToLogin(navigate)
        }

        handleError(error)
      })
    }
  }, [url,
    navigate,
    handleError
  ])

  return data
}