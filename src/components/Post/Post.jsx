import { MoreVert } from "@material-ui/icons"

import styles from "./Post.module.css"

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postTopbar}>
                    <div className={styles.postAvatar}>
                        <img src="assets/person/1.jpeg" className={styles.postAvatarImg} alt="Post user profile" />
                        <span className={styles.postUsername}>
                            Edmilson Ferreira
                        </span>
                        <span className={styles.postDate}>
                            5 min ago
                        </span>
                    </div>
                    <div className={styles.postOptions}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postContent}>
                    <span className={styles.postContentText}>
                        First post
                    </span>
                    <img src="assets/post/1.jpeg" className={styles.postContentImg} alt="Post content" />
                </div>
                <div className={styles.postBotbar}>
                    <div className={styles.postReactionList}>
                        <img src="assets/like.png" className={styles.postReactionItem} alt="Post user profile" />
                        <img src="assets/heart.png" className={styles.postReactionItem} alt="Post user profile" />
                        <span className={styles.postLikeCounter}>
                            32 people liked it
                        </span>
                    </div>
                    <div className={styles.postComments}>
                        <span className={styles.postCommentCounter}>9 comments</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Post