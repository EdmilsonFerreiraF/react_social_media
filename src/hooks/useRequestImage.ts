import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useErrorHandler } from 'react-error-boundary';

export function useRequestImage(
  entity: "profile" | "profile_small" | "cover" | "post",
  initialState: any
) {
  const [data, setData] = useState(initialState)
  const handleError = useErrorHandler()

  useEffect(() => {
    const getData = async (image: string) => {
      const storage = getStorage(undefined, "gs://social-media-dc8fb.appspot.com")

      await getDownloadURL(ref(storage, `/${entity}/${image}`))
        .then((url) => {
          setData(url)
        })
        .catch((error) => {
          handleError(error)
        })
    }

    if (initialState) {
      getData(initialState)
    }
  }, [initialState, entity, handleError])

  return data
}