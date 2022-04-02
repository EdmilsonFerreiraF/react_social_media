import TypeList from "./TypeList/TypeList"
import { AuthContext } from "../../context/AuthContext"

import styles from "./CreatePost.module.css"
import { createRef, useContext, useEffect, useRef, useState } from "react"
import axios from "axios"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'
import { baseUrl } from "../../constants/baseUrl"
import { useRequestImage } from '../../hooks/useRequestImage'

const CreatePost = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const { user } = useContext(AuthContext)

    const [ description, setDescription ] = useState("")
    const [ file, setFile ] = useState(null)

    const imgId = v4()
    
    const submitHandler = async e => {
        e.preventDefault()

        const newPost = {
            userId: user?._id,
            description: description,
            image: "posts/" + imgId
        }
        
        const storage = getStorage();
        const storageRef = ref(storage, 'posts/' + imgId);

        // Create file metadata including the content type
        const metadata = {
            contentType: 'image',
        };

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file, metadata).then((snapshot) => {
            console.log(snapshot)
          console.log('Uploaded a blob or file!');
        });

        try {
            await axios.post(`${baseUrl}/posts`, newPost)
        } catch (err) {
            
        }
    }

    const inputHandler = (e) => {
        setDescription(e.target.value)
    }

    const profilePicture = useRequestImage("profile", user?.profilePicture)
    
    return (
        <div className={styles.createPost}>
            <div className={styles.createPostContainer}>
                <div className={styles.createPostContent}>
                    <img className={styles.profileImg}
                    id="profileImg" 
                    src={
                        profilePicture ?? `${publicFolder}/person/no_avatar.jpg`
                    }
                     alt="User profile" />
                    <input placeholder={`What's in your mind ${user?.username}?`}
                     className={styles.createPostInput} value={description} onChange={inputHandler} />
                </div>
                <hr className={styles.createPostDivision}/>
                <form className={styles.createPostBotbar} onSubmit={submitHandler}>
                    <TypeList setFile={setFile} inputHandler={inputHandler} />

                    <button className={styles.createPostButton} type="submit" disabled={(!description || description === "") && !file}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost