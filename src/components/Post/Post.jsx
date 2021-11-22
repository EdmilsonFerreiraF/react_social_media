import { MoreVert } from "@material-ui/icons"
import { useState } from "react"

import { Users } from '../../dummyData'

import styles from "./Post.module.css"

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    
    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postImg}>
                        <img src={Users.filter(user => user.id === post.userId)[0].profilePicture}

                         className={styles.postProfileImg}
                          alt="Post user profile" />
                        <span className={styles.postUsername}>
                            {Users.filter(user => user.id === post.userId)[0].username}
                        </span>
                        <span className={styles.postDate}>
                            {post.date}
                        </span>
                    </div>
                    <div className={styles.postOptions}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postContent}>
                    <span className={styles.postContentText}>
                        {post?.desc}
                    </span>
                    <img src={post.photo} className={styles.postContentImg} alt="Post content" />
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img src="assets/like.png" className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
                        <img src="assets/heart.png" className={styles.postReactionItem} onClick={likeHandler} alt="Post user profile" />
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