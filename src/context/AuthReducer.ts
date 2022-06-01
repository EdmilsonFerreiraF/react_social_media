type initialState = {
    user: {
        id: string,
        username: string,
        email: string,
        profilePicture: string,
        coverPicture: string,
        isAdmin: boolean,
        followers: [],
        followings: []
    },
    isFetching: boolean,
    error: boolean
};

type ACTIONTYPE =
  | { type: "LOGIN_START"; payload: number }
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "LOGIN_FAILURE"; payload: string }

const AuthReducer = (state: initialState, action: ACTIONTYPE) => {
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