import React from "react"
import { useContext, useEffect } from 'react'

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
import { sendData } from 'apiCalls'

import noProfilePicture from 'img/person/no_person.jpg'
import noPostPicture from 'img/post/1.jpeg'
import TopBar from "./TopBar"
import Content from "./Content"
import BotBar from "./BotBar"

export interface IPost {
    _id: string;
    id: string;
    userId: string;
    description: string;
    image: string;
    likes: User["id"][];
    createdAt: Date;
    comment: number;
}

const Post = ({ post }: { post: IPost }) => {
    const { form, onChange } = useForm({
        likes: post?.likes.length,
        isLiked: false,
        readMore: false
    })

    const { user: currentUser } = useContext(AuthContext) as
        AuthContextInterface

    useEffect(() => {
        onChange(
            post?.likes.includes(currentUser?.id),
            "likes"
            )
    }, [currentUser?.id, post?.likes])

    const otherUser = useRequestData(post &&
        post.userId &&
        `${baseUrl}/user/${post.userId}`,
        {})

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

    const likeHandler = async () => {
        const url = `${baseUrl}/post/${post?.id}/like`
        const data = { userId: currentUser?.id }

        sendData(url, "put", data)
            .catch(() => {
                onChange(form.isLiked ? form.likes - 1 :
                    form.likes + 1, "isLiked")
            })
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
                <BotBar comments={post?.comment}
                    likes={post?.likes.length + 1}
                    likeHandler={likeHandler} />
            </div>
        </div>
    )
}

export default Post