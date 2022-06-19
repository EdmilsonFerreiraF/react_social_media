import { INITIAL_STATE } from "./AuthContext"

export type ACTIONTYPE =
    | { type: "LOGIN_START"; payload?: number }
    | { type: "LOGIN_SUCCESS"; payload?: string }
    | { type: "LOGIN_FAILURE"; payload?: string }

const AuthReducer = (
    state: typeof INITIAL_STATE,
    action: ACTIONTYPE
) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer