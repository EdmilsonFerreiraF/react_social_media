import { INITIAL_STATE, User } from "./AuthContext";

export type ACTIONTYPE =
    | { type: "LOGIN_START"; payload?: number }
    | { type: "LOGIN_SUCCESS"; payload?: User }
    | { type: "LOGIN_FAILURE"; payload?: any }

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