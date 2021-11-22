import Share from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import { Posts } from '../../dummyData'

import styles from "./Feed.module.css"

const Feed = () => {
    return (
        <div className={styles.feedContainer}>
            <div className={styles.feed}>
                <Share />
                
                {Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed