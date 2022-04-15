import { MoreVert } from "@mui/icons-material"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import styles from "./Post.module.css"
import { baseUrl } from "../../constants/baseUrl"
import { AuthContext } from "../../context/AuthContext"
import { useRequestImage } from "../../hooks/useRequestImage"
import { useRequestData } from "../../hooks/useRequestData"
import { useForm } from "../../hooks/useForm"
import { sendData } from '../../apiCalls'

const Post = ({ post }) => {
    const { form, onChange } = useForm({ likes: post?.likes.length, isLiked: false })

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        onChange(post?.likes.includes(currentUser?.id), "likes")
    }, [currentUser?.id, post?.likes])

    const token = localStorage.getItem("token")

    const user = useRequestData(`${baseUrl}/user/${post?.userId}`, {})

    const postPicture = useRequestImage("posts", post?.image)
    const profilePicture = useRequestImage("profile", user?.profilePicture)

    const likeHandler = async () => {
        const url = `${baseUrl}/post/${post?.id}/like`
        const data = { userId: currentUser?.id }

        sendData(url, "put", data)
            .catch(err => {
                onChange(form.isLiked ? form.likes - 1 : form.likes + 1, "isLiked")
            })
    }

    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postImg}>
                        <Link to={`profile/${user.username}`}>
                            <img src={profilePicture
                                ??
                                `${publicFolder}/person/no_person.jpg`}
                                className={styles.postProfileImg}
                                alt="Post user profile" />
                        </Link>
                        <span className={styles.postUsername}>
                            {user.username}
                        </span>
                        <span className={styles.postDate}>
                            {format(post?.createdAt)}
                        </span>
                    </div>
                    <div className={styles.postOptions}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postContent}>
                    <span className={styles.postContentText}>
                        {post?.description}
                    </span>
                    <img className={styles.postContentImg}
                        src={postPicture ?? `${publicFolder}/post/1.jpeg`}
                        alt="Post content" />
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img className={styles.postReactionItem}
                            src={`${publicFolder}/like.png`}
                            onClick={likeHandler}
                            alt="Post user profile" />
                        <img className={styles.postReactionItem}
                            src={`${publicFolder}/heart.png`}
                            onClick={likeHandler}
                            alt="Post user profile" />
                        <span className={styles.postLikeCounter}>
                            {post?.likes.length + 1} people liked it
                        </span>
                    </div>
                    <div className={styles.postComments}>
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