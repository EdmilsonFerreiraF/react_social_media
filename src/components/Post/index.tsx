import React from "react"
import { MoreVert } from "@mui/icons-material"
import { useContext, useEffect } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

import styles from "./style.module.css"
import { baseUrl } from "constants/baseUrl"
import { AuthContext, AuthContextInterface, User } from "context/AuthContext"
import { useRequestImage } from "hooks/useRequestImage"
import { useRequestData } from "hooks/useRequestData"
import { useForm } from "hooks/useForm"
import { sendData } from 'apiCalls'

import noProfilePicture from 'img/person/no_person.jpg'
import noPostPicture from 'img/post/1.jpeg'
import likeImg from 'img/like.png'
import heartImg from 'img/heart.png'

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
    const { form, onChange } = useForm({ likes: post?.likes.length, isLiked: false, readMore: false })

    const { user: currentUser } = useContext(AuthContext) as AuthContextInterface

    useEffect(() => {
        onChange(post?.likes.includes(currentUser?.id), "likes")
    }, [currentUser?.id, post?.likes])

    const user = useRequestData(`${baseUrl}/user/${post?.userId}`, {})

    const postPicture = useRequestImage("post", post?.image)
    const profilePicture = useRequestImage("profile", user?.profilePicture)

    const handleReadMore = () => {
        onChange(!form.readMore, "readMore")
    }

    const likeHandler = async () => {
        const url = `${baseUrl}/post/${post?.id}/like`
        const data = { userId: currentUser?.id }

        sendData(url, "put", data)
            .catch(() => {
                onChange(form.isLiked ? form.likes - 1 : form.likes + 1, "isLiked")
            })
    }

    return (
        <div data-testid="post"
            className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postImg}>
                        <Link to={`profile/${user.username}`}>
                            <img src={profilePicture
                                ??
                                noProfilePicture}
                                className={styles.postProfileImg}
                                alt="Post user profile" />
                        </Link>
                        <span data-testid="post username"
                            className={styles.postUsername}>
                            {user.username}
                        </span>
                        <span data-testid="post date"
                            className={styles.postDate}>
                            {format(post?.createdAt)}
                        </span>
                    </div>
                    <div data-testid="post options"
                        className={styles.postOptions}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postContent}>
                    <span data-testid="post content text"
                        className={styles.postContentText}>
                        {!form.readMore ?
                            <>
                                <>{post?.description.slice(0, 150)}
                                    <span className={styles.postReadMore}
                                        onClick={handleReadMore}>
                                        ... read more
                                    </span></>
                            </>
                            :
                            <>
                                {post?.description}
                                <span className={styles.postReadLess}
                                    onClick={handleReadMore}>
                                    read less
                                </span>
                            </>
                        }
                    </span>

                    <img data-testid="post content image"
                        className={styles.postContentImg}
                        src={postPicture ?? noPostPicture}
                        alt="Post content" />
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img className={styles.postReactionItem}
                            src={likeImg}
                            onClick={likeHandler}
                            alt="Post like reaction" />
                        <img className={styles.postReactionItem}
                            src={heartImg}
                            onClick={likeHandler}
                            alt="Post heart reaction" />
                        <span data-testid="post likes"
                            className={styles.postLikeCounter}>
                            {post?.likes.length + 1} people liked it
                        </span>
                    </div>
                    <div data-testid="post comments"
                        className={styles.postComments}>
                        <span className={styles.postCommentCounter}>
                            {post?.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post