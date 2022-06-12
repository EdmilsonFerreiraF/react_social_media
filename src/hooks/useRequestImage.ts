import { useState, useEffect } from "react";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useErrorHandler } from 'react-error-boundary'
import { initializeApp } from "firebase/app"
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig)

export function useRequestImage(entity: "profile" | "cover" | "post", initialState: any) {
  const [data, setData] = useState(initialState);
  const handleError = useErrorHandler()

  useEffect(() => {
    const getData = async (image: string) => {
      const storage = getStorage(app, "gs://social-media-dc8fb.appspot.com");

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