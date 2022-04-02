import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (url) { 
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
      });
    }
  }, [url]);

  return data;
}