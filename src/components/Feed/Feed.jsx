import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

import styles from "./Feed.module.css"
import { baseUrl } from '../../constants/baseUrl'
import { AuthContext } from '../../context/AuthContext'

const Feed = ({ otherUserId }) => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem("token")

    useEffect(() => {
        const fetchPosts = async () => {
            if (otherUserId) {
                console.log('token', token)
                await axios.get(`${baseUrl}/post/profile/${otherUserId}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
            } else if (user?.id) {
                console.log('token', token)

                await axios.get(`${baseUrl}/post/timeline/${user?.id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
            }
        }

        fetchPosts()
    }, [otherUserId, user, token])
    
    console.log('otherUserId - feed', otherUserId)
    console.log('user.otherUserId - feed', user?.otherUserId)
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