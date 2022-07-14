import { NavigateFunction } from "react-router-dom"

export const goToIndex = (
    navigate: NavigateFunction
) => {
    navigate('/')
}

export const goToProfile = (
    navigate: NavigateFunction,
    username: string
) => {
    navigate(`/profile/${username}`)
}

export const goToSignup = (
    navigate: NavigateFunction
) => {
    navigate('/signup')
}

export const goToLogin = (
    navigate: NavigateFunction
) => {
    navigate('/login')
}