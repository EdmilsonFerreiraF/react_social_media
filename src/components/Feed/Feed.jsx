import Share from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"

const Feed = () => {
    return (
        <div className={styles.feedContainer}>
            <div className={styles.feed}>
                <Share />
                
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed