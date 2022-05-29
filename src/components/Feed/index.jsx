import { useContext } from 'react'

import CreatePost from '../CreatePost'
import Post from '../Post'

import styles from "./style.module.css"
import { baseUrl } from 'constants/baseUrl'
import { AuthContext } from 'context/AuthContext'
import { useRequestData } from 'hooks/useRequestData'

const Feed = ({ otherUserId }) => {
    const { user } = useContext(AuthContext)
    console.log('user - Feed', user)

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
        <main data-testid="feed" className={styles.feedContainer}>
            <div className={styles.feed}>
                {createPost}
                {posts}
            </div>
        </main>
    )
}

export default Feed