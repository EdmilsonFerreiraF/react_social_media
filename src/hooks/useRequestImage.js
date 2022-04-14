import { useState, useEffect } from "react";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { executeAsync } from "../handlers/exceptions";

export function useRequest(entity, initialState) {
  const [data, setData] = useState(initialState);

    useEffect(() => {
        const getData = async(image) => {
          const storage = getStorage();

          getDownloadURL(ref(storage, `/${entity}/${image}`))
          .then((url) => {
            console.log('url - useRequestImage', url)
            setData(url)
          })
          .catch((error) => {
            console.log('error - useRequestImage', error)
          });
      }

      if (initialState) {
        getData(initialState)
      }
    }, [initialState, entity])

  return data;
}

export const useRequestImage = () => executeAsync(useRequest)