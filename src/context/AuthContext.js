import { createContext, useReducer } from "react"

import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        id: "",
        username: "",
        email: "",
        profilePicture: "",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}