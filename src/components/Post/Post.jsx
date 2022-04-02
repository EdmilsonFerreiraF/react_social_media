import { MoreVert } from "@mui/icons-material"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import styles from "./Post.module.css"
import { baseUrl } from "../../constants/baseUrl"
import { AuthContext } from "../../context/AuthContext"
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useRequestImage } from "../../hooks/useRequestImage"
import { useRequestData } from "../../hooks/useRequestData"

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser.id))
    }, [currentUser.id, post.likes])
    
    const token = localStorage.getItem("token")

    const user = useRequestData(`${baseUrl}/user/${post?.userId}`, {})

    const postPicture = useRequestImage("posts", post?.image)
    const profilePicture = useRequestImage("profile", user?.profilePicture)

    const likeHandler = () => {
        try {
            axios.put(`${baseUrl}/post/${post.id}/like`, { userId: currentUser.id }, {
                headers: {
                    Authorization: token
                }
            })
        } catch (err) {
            setLikes(isLiked ? likes - 1 : likes + 1)
        }
    }

    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postImg}>
                        <Link to={`profile/${user.username}`}>
                            <img src={profilePicture ?? `${publicFolder}/person/no_person.jpg`}
                            className={styles.postProfileImg}
                            alt="Post user profile" />
                          </Link>
                        <span className={styles.postUsername}>
                            {user.username}
                        </span>
                        <span className={styles.postDate}>
                            {format(post.createdAt)}
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
                    <img src={postPicture ?? `${publicFolder}/post/1.jpeg`} className={styles.postContentImg} alt="Post content" />
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img src={`${publicFolder}/like.png`} className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
                        <img src={`${publicFolder}/heart.png`} className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
                        <span className={styles.postLikeCounter}>
                            {likes} people liked it
                        </span>
                    </div>
                    <div className={styles.postComments}>
                        <span className={styles.postCommentCounter}>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post