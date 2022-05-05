import { useContext } from 'react'

import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from 'constants/baseUrl'
import { AuthContext } from 'context/AuthContext'
import { useRequestData } from 'hooks/useRequestData'

const Feed = ({ otherUserId }) => {
    const { user } = useContext(AuthContext)

    const getPosts = useRequestData(
        (otherUserId
        ?
        `${baseUrl}/post/profile/${otherUserId}`
        :
        user &&
        `${baseUrl}/post/timeline/${user?.id}`)
        , []
    )

    const posts = getPosts.length
        ?
        getPosts.map(post => (
            <Post key={post?._id} post={post} />
        ))
        :
        (
            <div className={styles.noPosts}>
                <p className={styles.noPostText}>
                    No posts created yet
                </p>
            </div>
        )

    const createPost = !otherUserId && <CreatePost />

    return (
        <main className={styles.feedContainer}>
            <div className={styles.feed}>
                {createPost}
                {posts}
            </div>
        </main>
    )
}

export default Feed