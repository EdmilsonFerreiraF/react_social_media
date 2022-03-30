import axios from 'axios'

import { baseUrl } from './constants/baseUrl'

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })

    try {
        const res = await axios.post(`${baseUrl}/user/login`, userCredential)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (err) {
        dispatch({ type: "LOGIN_FAILED", payload: err })
    }
}