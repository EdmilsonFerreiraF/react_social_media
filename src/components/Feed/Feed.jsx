import { useEffect, useState } from 'react'
import axios from 'axios'

import Share from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from '../../constants/baseUrl'

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
            ? await axios.get(`${baseUrl}posts/profile/${username}`)
            : await axios.get(`${baseUrl}posts/timeline/6198494ec6ece6cbe6cdae4e`)
            console.log('res', res)
            setPosts(res.data)
            // return res.data
        }

        fetchPosts()
    }, [])
    
    return (
        <div className={styles.feedContainer}>
            <div className={styles.feed}>
                <Share />
                
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed