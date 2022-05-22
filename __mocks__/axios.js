// import { todos } from "../makeTodos";
// import { getStorage, getDownloadURL, ref } from "firebase/storage"

// const storage = getStorage();

const imageUrl = `/profile/2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg`

const user = {
    _id: "6198494ec6ece6cbe6cdae4e",
    username: "user_username33",
    email: "user_email@email.com",
    profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: []
}

const friendUser = {
    _id: "6198494ec6ece6cbe6cdae4e",
    username: "user_username2",
    email: "user_email@email.com",
    profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: []
}

const get = jest.fn().mockImplementation((url) => {

    if (url.includes(`user/user_username33`)) {
        return Promise.resolve({ data: user });
    } else if (url.includes(`user`)) {
        return Promise.resolve({ data: friendUser });
    } else if (url.includes("/post/profile/" ||
        "/post/timeline/")) {
        return Promise.resolve({ data: friendUser });
    }
    
    throw new Error(`UNMATCHED URL: ${url}`);
})

export default get