import React, { createContext, ReducerWithoutAction, useReducer } from "react"

import AuthReducer, { ACTIONTYPE } from "./AuthReducer"

interface User {
    id: string,
    username: string,
    email: string,
    profilePicture: string,
    coverPicture: string,
    isAdmin: boolean,
    followers: [],
    followings: []
}

export interface AuthContextInterface {
    user: User,
    isFetching: boolean,
    error: boolean,
    dispatch: (type: ACTIONTYPE) => void
}

export const INITIAL_STATE = {
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

export const AuthContext = createContext<AuthContextInterface | {}>({})

export const AuthContextProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const [state, dispatch] = useReducer(AuthReducer as ReducerWithoutAction<any>, INITIAL_STATE)

    const authContext: AuthContextInterface = {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    };

    return (
        <AuthContext.Provider
            value={authContext}
        >
        {children}
        </AuthContext.Provider>
    )
}