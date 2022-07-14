type User = {
    _id: string
    id: number
    username: string
    email: string
    profilePicture: string
    coverPicture: string
    isAdmin: boolean
    followers: []
    followings: []
}

type Post = {
    id: number
    userId: string
    description: string
    image: string
    likes: []
}

const user: User = {
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

const friendUser: User = {
    ...user, id: 1
}

const friend: User = {
    ...user, _id: "6198494ec6ece6cbe6cdae4e",
    id: 0,
    username: "user_username32",
}

const friend2: User = {
    ...user, _id: "6198494ec6ece6cbe6cdae4f",
    id: 1,
    username: "user_username2",
}

const friend3: User = {
    ...user, _id: "6198494ec6ece6cbe6cdae4g",
    id: 2,
    username: "user_username",
}

const friends: User[] = [
    friend, friend2, friend3
]

const post0: Post = {
    id: 0,
    userId: "bdb9322d-5868-4091-a305-d8cd9e4f62f4",
    description: "user - post description",
    image: "0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg",
    likes: [],
}

const post1: Post = {
    ...post0, id: 1
}

const userPosts: Post[] = [
    post0,
    post1
]

const friendPost0: Post = {
    ...post0,
    userId: "3a32071d-00f5-480e-bc93-b321299109ee",
    description: "other user - post description",
}

const friendPost1: Post = {
    ...post0,
    userId: "3a32071d-00f5-480e-bc93-b321299109ee",
    description: "other user - post description",
}

const friendPosts: Post[] = [
    friendPost0,
    friendPost1,
]

export const checkInclusion = (
    url: string,
    data?: User | User[] | Post | Post[] | string
) => {
    if (url.includes(url)) {
        return Promise.resolve({ data })
    }
}

const post = jest.fn().mockImplementation(
    () => {
        checkInclusion(`/user/signup`)

        return Promise.resolve()
    }
)

type Implementations = [
    string, User | User[] | Post | Post[]
][]

const implementations: Implementations = [
    ['user/user_username2', friendUser],
    ['friends', friends],
    ['user', user],
    ["/post/timeline/", userPosts],
    ["/post/profile/", friendPosts],
]

const get = jest.fn().mockImplementation(() => {
    for (let implementation of implementations) {
        const url = implementation[0]
        const data = implementation[1]

        checkInclusion(url, data)
    }

    return Promise.resolve({ data: user })
})

const axios = {
    __esModule: true,
    get,
    post,
    default: () => new Promise(() => { }),
}

export default axios;