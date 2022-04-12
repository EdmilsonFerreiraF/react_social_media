import axios from 'axios'

import { baseUrl } from './constants/baseUrl'
import { goToIndex } from './routes/coordinator'

export const loginCall = async (userCredential, dispatch, navigate) => {
    dispatch({ type: "LOGIN_START" })

    try {
        await axios
        .post(`${baseUrl}/user/login`, userCredential)
        .then(res => {
            localStorage.setItem("token", res.data.token)

            goToIndex(navigate)
        })
        .catch(err => console.log(err))
    } catch (err) {
        dispatch({ type: "LOGIN_FAILED", payload: err })
    }
}

export async function sendData(url, method, data) {
    const token = localStorage.getItem("token")

    console.log('url', url)
    if (url) { 
      await axios[method](url, data,{
          headers: {
            Authorization: token
          }
      }).catch((error) => {
          console.log(error.message)
      })
    }
}