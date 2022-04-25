import { useContext } from 'react'

import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from 'constants/baseUrl'
import { AuthContext } from 'context/AuthContext'
import { useRequestData } from 'hooks/useRequestData'

const Feed = ({ otherUserId }) => {
    const { user } = useContext(AuthContext)

    const posts = useRequestData(otherUserId ? `${baseUrl}/post/profile/${otherUserId}` : user && `${baseUrl}/post/timeline/${user?.id}`, [])

    console.log('posts', posts)
    return (
        <main className={styles.feedContainer}>
            <div className={styles.feed}>
                { !otherUserId && <CreatePost /> }
                {posts.length && posts?.map(post => (
                    <Post key={post?._id} post={post} />
                ))}
            </div>
        </main>
    )
}

export default Feed