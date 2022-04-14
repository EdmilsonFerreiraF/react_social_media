import { useState, useEffect } from "react";
import axios from "axios";
import { executeAsync } from "../handlers/exceptions";

function useRequest(url, initialState) {
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
      console.log('url', url)
    }
  }, [url]);

  return data;
}

export const useRequestData = () => executeAsync(useRequest)