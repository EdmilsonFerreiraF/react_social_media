import { useState, useEffect } from "react";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

export function useRequestImage(entity, initialState) {
  const [data, setData] = useState(initialState);

    useEffect(() => {
        const getData = async(image) => {
          const storage = getStorage();

          getDownloadURL(ref(storage, `${entity}/${image}`))
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