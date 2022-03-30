import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from '../../constants/baseUrl'
import { AuthContext } from '../../context/AuthContext'

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
            ? await axios.get(`${baseUrl}/posts/profile/${username}`)
            : await axios.get(`${baseUrl}/posts/timeline/${user?._id}`)

            setPosts(res.data)
        }

        fetchPosts()
    }, [username, user])
    
    return (
        <div className={styles.feedContainer}>
            <div className={styles.feed}>
                { username === user?.username && <CreatePost /> }
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed