import { createContext, ReducerWithoutAction, useReducer } from "react";

import AuthReducer, { ACTIONTYPE } from "./AuthReducer";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  profilePicture?: string;
  coverPicture?: string;
  followers?: [];
  following?: [];
  description?: string;
  city?: string;
  from?: string;
  relationship?: Number;
}

export interface AuthContextInterface {
  user: User;
  isFetching: boolean;
  error: boolean;
  dispatch: (type: ACTIONTYPE) => void;
}

type InitialState = {
  user: {
    id: null;
    username: null;
    email: null;
    profilePicture: null;
    coverPicture: null;
    isAdmin: boolean;
    followers: [];
    followings: [];
  };
  isFetching: boolean;
  error: boolean;
};

export const INITIAL_STATE: InitialState = {
  user: {
    id: null,
    username: null,
    email: null,
    profilePicture: null,
    coverPicture: null,
    isAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<AuthContextInterface | {}>({});

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [state, dispatch] = useReducer(
    AuthReducer as ReducerWithoutAction<any>,
    INITIAL_STATE
  );

  const authContext: AuthContextInterface = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
