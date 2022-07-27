import { User } from "./AuthContext"
import { ACTIONTYPE } from "./AuthReducer"

export const LoginStart = () => ({
    type: "LOGIN_START"
}) as ACTIONTYPE

export const LoginSuccess = (user: User) => ({
    type: "LOGIN_SUCCESS",
    payload: user
}) as ACTIONTYPE

export const LoginFailure = (err: any) => ({
    type: "LOGIN_FAILURE",
    payload: err
}) as ACTIONTYPE