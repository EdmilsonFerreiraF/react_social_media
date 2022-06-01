import { useState, useEffect } from "react";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useErrorHandler } from 'react-error-boundary'

export function useRequestImage(entity: "profile" | "cover" | "post", initialState: any) {
  const [data, setData] = useState(initialState);
  const handleError = useErrorHandler()

  useEffect(() => {
    const getData = async (image: string) => {
      const storage = getStorage();

      getDownloadURL(ref(storage, `/${entity}/${image}`))
        .then((url) => {
          setData(url)
        })
        .catch((error) => {
          handleError(error)
        });
    }

    if (initialState) {
      getData(initialState)
    }
  }, [initialState, entity])

  return data;
}