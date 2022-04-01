import { MoreVert } from "@material-ui/icons"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import styles from "./Post.module.css"
import { baseUrl } from "../../constants/baseUrl"
import { AuthContext } from "../../context/AuthContext"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)

    const [profilePicture, setProfilePicture] = useState("")
    const [postPicture, setPostPicture] = useState("")

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])
    
    const token = localStorage.getItem("token")
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${baseUrl}/user/${post.userId}`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                console.log('user.profilePicture', user.profilePicture)
                
                setUser(res.data)
            })
        }
        
        if (post.userId) {
            fetchUser()
        }
    }, [post.userId])

    console.log('post', post)

    useEffect(() => {
        const getPostsPic = async(picture) => {
            const storage = getStorage();

            getDownloadURL(ref(storage, "posts/" + picture))
            .then((url) => {
                setPostPicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        getPostsPic(post.image)
    }, [post.image])

    useEffect(() => {
        const getProfilePic = async(picture) => {
            const storage = getStorage();

            getDownloadURL(ref(storage, "profile/" + picture))
            .then((url) => {
                setProfilePicture(url)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        if (user.profilePicture) {
            getProfilePic(user.profilePicture)

        }
    }, [user.profilePicture])
        
    const likeHandler = () => {
        try {
            axios.put(`/posts/${post._id}/like`, { userId: currentUser._id })
        } catch (err) {
            setLike(isLiked ? like - 1 : like + 1)
        }
    }

    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postImg}>
                        <Link to={`profile/${user.username}`}>
                            {/* <img src={profilePicture} */}
                            <img src={`${profilePicture && profilePicture !== "" ? profilePicture : publicFolder + "person/no_person.jpg"}`}
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
                    {postPicture &&
                        <img src={postPicture} className={styles.postContentImg} alt="Post content" />
                    }
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img src={`${publicFolder}like.png`} className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
                        <img src={`${publicFolder}heart.png`} className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
                        <span className={styles.postLikeCounter}>
                            {like} people liked it
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