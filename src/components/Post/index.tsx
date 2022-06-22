import React, {
    useContext
} from "react"

import styles from "./style.module.css"
import { baseUrl } from "constants/baseUrl"
import {
    AuthContext,
    AuthContextInterface,
    User
} from "context/AuthContext"
import { useRequestImage } from "hooks/useRequestImage"
import { useRequestData } from "hooks/useRequestData"
import { useForm } from "hooks/useForm"

import noProfilePicture from 'img/no_person.webp'
import noPostPicture from 'img/no_image.webp'
import TopBar from "./TopBar"
import Content from "./Content"
import BotBar from "./BotBar"

export interface IPost {
    _id: string
    id: string
    userId: string
    description: string
    image: string
    likes: User["id"][]
    createdAt: Date
    comment: number
}

const Post = ({ post }: { post: IPost }) => {
    const { form, onChange } = useForm({
        likes: post?.likes?.length,
        isLiked: false,
        readMore: false
    })

    const { user: currentUser } = useContext(AuthContext) as
        AuthContextInterface

    const otherUser = useRequestData(post &&
        post.userId &&
        `${baseUrl}/user/${post.userId}`,
        {}
    )

    const user = post && post.userId === currentUser.id ?
        currentUser :
        otherUser

    const postPicture = useRequestImage("post",
        post?.image)
    const profilePicture = useRequestImage("profile",
        user?.profilePicture)

    const handleReadMore = () => {
        onChange(!form.readMore, "readMore")
    }

    return (
        <div data-testid="post"
            className={styles.post}>
            <div className={styles.postContainer}>
                <TopBar profilePicture={profilePicture}
                    noProfilePicture={noProfilePicture}
                    username={user?.username}
                    createdAt={post?.createdAt}
                />
                <Content readMore={form.readMore}
                    handleReadMore={handleReadMore}
                    postPicture={postPicture}
                    noPostPicture={noPostPicture}
                    description={post?.description}
                />
                <BotBar userId={currentUser?.id}
                    postId={post?.id}
                    comments={post?.comment}
                    likes={post?.likes.length + 1} />
            </div>
        </div>
    )
}

export default Post