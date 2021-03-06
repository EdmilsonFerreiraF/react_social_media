import axios from "axios"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { useEffect } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

import { baseUrl } from 'constants/baseUrl'
import { User } from "context/AuthContext"
import { ACTIONTYPE } from "context/AuthReducer"
import { goToIndex, goToLogin } from 'routes/coordinator'

type UserData = {
    username: string
    email: string
    password: string
    isAdmin: boolean
}

type Data = {
    description: string
    image: string
}

export const loginCall = async (
    userCredential: { email: string, password: string },
    dispatch: React.Dispatch<ACTIONTYPE>,
    navigate: NavigateFunction
) => {
    dispatch({ type: "LOGIN_START" })

    await axios
        .post(`${baseUrl}/user/login`, userCredential)
        .then(res => {
            localStorage.setItem("token", res.data.token)

            goToIndex(navigate)
        })
        .catch(err => {
            console.log(err)

            dispatch({ type: "LOGIN_FAILURE", payload: err })
        })
}

export const useGetUser = (
    user: User,
    token: string,
    dispatch: React.Dispatch<ACTIONTYPE>,
    handleError: (givenError?: Error) => void
) => {
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (!user?.id && token) {
                dispatch({ type: "LOGIN_START" })

                const res = await axios
                    .get(`${baseUrl}/user`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    .then(res => {
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: res.data
                        })
                    })
                    .catch(err => {
                        dispatch({
                            type: "LOGIN_FAILURE",
                            payload: err
                        })

                        const errorData = err as any
                        const { data: { message } }
                            = errorData.response

                        if (message === "jwt expired") {
                            localStorage.removeItem('token')

                            goToLogin(navigate)
                        }

                        if (message === "invalid token") {
                            localStorage.removeItem('token')

                            goToLogin(navigate)
                        }

                        handleError(err)
                    })

                return res
            }
        })()
    }, [user, token, dispatch, navigate, handleError])
}

export async function signup(
    url: string,
    data: UserData
) {
    if (url) {
        await axios.post(url, data)
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export async function sendData(
    url: string,
    method: "post" | "put",
    data: Data | { userId: string }
) {
    const token = localStorage.getItem("token")

    if (url) {
        await axios[method](url, data, {
            headers: {
                Authorization: token as string
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
}

export async function uploadPostPic(
    image: Blob | Uint8Array | ArrayBuffer,
    imgId: string
) {
    const storage = getStorage(undefined, "gs://social-media-dc8fb.appspot.com")
    const storageRef = ref(storage, 'post/' + imgId)

    const metadata = {
        contentType: 'image',
    }

    uploadBytes(storageRef, image, metadata)
        .then(() => {
            console.log('Uploaded a blob or file!')
        })
}