
import React, { createContext, useReducer } from "react";
export const AuthContext = createContext({});

const breedsListResponse = {
    message: {
        boxer: [],
        cattledog: [],
        dalmatian: [],
        husky: [],
    },
};

const dogImagesResponse = {
    message: [
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
    ],
};

// `${baseUrl}/post/profile/${otherUserId}`
// `${baseUrl}/post/timeline/${user?.id}`



export const AppProvider = ({ children }) => {
    const reducer = (state, action) => {
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
            // case "LOGIN_FAILURE":
            //     return { ...state, activeToDoItem: action.todo };
            default:
                return state;
        }
    };
    const [user, appDispatch] = useReducer(reducer, {
        _id: "6198494ec6ece6cbe6cdae4e",
        id: "6198494ec6ece6cbe6cdae4e",
        username: "user_username",
        email: "user1_email@email.com",
        profilePicture: "1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    });
    return (
        <AuthContext.Provider value={{ user, appDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};