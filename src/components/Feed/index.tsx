import React, { useContext } from 'react'

import CreatePost from '../CreatePost'
import Post, { IPost } from '../Post'

import styles from "./style.module.css"
import { baseUrl } from 'constants/baseUrl'
import { AuthContext, AuthContextInterface } from 'context/AuthContext'
import { useRequestData } from 'hooks/useRequestData'

type Props = {
    otherUserId?: string
}

const Feed = ({ otherUserId }: Props) => {
    const { user } = useContext(AuthContext) as AuthContextInterface

    const getPosts = useRequestData(
        (otherUserId
            ?
            `${baseUrl}/post/profile/${otherUserId}`
            :
            user && user.id &&
            `${baseUrl}/post/timeline/${user.id}`)
        , []
    )

    const posts = getPosts.length
        ?
        getPosts.map((post: IPost) => (
            <Post key={post?._id}
                post={post} />
        ))
        :
        (
            <div className={styles.noPosts}>
                <p>
                    No posts created yet
                </p>
            </div>
        )

    const createPost = !otherUserId && <CreatePost />

    return (
        <main data-testid="feed"
            className={styles.feedContainer}>
            <div className={styles.feed}>
                {createPost}
                {posts}
            </div>
        </main>
    )
}

export default Feed