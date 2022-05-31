const user = {
    _id: "6198494ec6ece6cbe6cdae4e",
    id: 0,
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
    id: 1,
    username: "user_username2",
    email: "user_email@email.com",
    profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: []
}

const friends = [
    {
        _id: "6198494ec6ece6cbe6cdae4e",
        id: 0,
        username: "user_username32",
        email: "user_email@email.com",
        profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
    {
        _id: "6198494ec6ece6cbe6cdae4f",
        id: 1,
        username: "user_username2",
        email: "user_email@email.com",
        profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
    {
        _id: "6198494ec6ece6cbe6cdae4g",
        id: 2,
        username: "user_username",
        email: "user_email@email.com",
        profilePicture: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
]

const userPosts = [
    {
        id: 0,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    },
    {
        id: 1,
        userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
        description: "user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    },
]

const friendPosts = [
    {
        id: 0,
        userId: "3a32071d-00f5-480e-bc93-b321299109ee",
        description: "other user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    },
    {
        id: 1,
        userId: "3a32071d-00f5-480e-bc93-b321299109ee",
        description: "other user  -post description",
        image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
        likes: [],
    },
]

const post = jest.fn().mockImplementation((url) => {
    if (url.includes(`/user/signup`)) {
        return Promise.resolve();
    }
})

const get = jest.fn().mockImplementation((url, _) => {
    console.log('jest mock url', url)
    if (url.includes(`user/user_username2`)) {
        return Promise.resolve({ data: friendUser });
    } else if (url.includes('friends')) {
        return Promise.resolve({ data: friends });
    } else if (url.includes('user')) {
        return Promise.resolve({ data: user });
    } else if (url.includes("/post/timeline/")) {
        return Promise.resolve({ data: userPosts });
    } else if (url.includes("/post/profile/")) {
        return Promise.resolve({ data: friendPosts });
    } else {
        return Promise.resolve({ data: user });
    }
})

const axios = {
    __esModule: true,
    get,
    post,
    default: () => new Promise(() => { }),
}

export default axios;