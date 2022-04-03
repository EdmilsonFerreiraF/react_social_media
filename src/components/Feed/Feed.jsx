import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from '../../constants/baseUrl'
import { AuthContext } from '../../context/AuthContext'
import { useRequestData } from '../../hooks/useRequestData'

const Feed = ({ otherUserId }) => {
    // const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem("token")

    console.log('otherUserId', otherUserId)
    const posts = useRequestData(otherUserId ? `${baseUrl}/post/profile/${otherUserId}` : `${baseUrl}/post/timeline/${user?.id}`, [])

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         if (otherUserId) {
    //             await axios.get(`${baseUrl}/post/profile/${otherUserId}`, {
    //                 headers: {
    //                     Authorization: token
    //                 }
    //             })
    //             .then(res => setPosts(res.data))
    //             .catch(err => console.log(err))
    //         } else if (user?.id) {
    //             posts = useRequestData(`${baseUrl}/post/timeline/${user.id}`, [])
    //         }
    //     }

    //     fetchPosts()
    // }, [otherUserId, user, token])
    
    return (
        <div className={styles.feedContainer}>
            <div className={styles.feed}>
                { !otherUserId && <CreatePost /> }
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed