import TypeList from "./TypeList/TypeList"
import { AuthContext } from "../../context/AuthContext"

import styles from "./CreatePost.module.css"
import { useContext } from "react"

const CreatePost = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const { user } = useContext(AuthContext)

    return (
        <div className={styles.createPost}>
            <div className={styles.createPostContainer}>
                <div className={styles.createPostContent}>
                    <img className={styles.profileImg} src={`${
                        user.profilePicture
                        ? publicFolder + user.profilePicture
                        : user.profilePicture + "person/no_avatar.jpg"
                    }`} alt="" />
                    <input placeholder={`What's in your mind ${user.username}?`}
                     className={styles.createPostInput}/>
                </div>
                <hr className={styles.createPostDivision}/>
                <div className={styles.createPostBotbar}>
                    <TypeList />

                    <button className={styles.createPostButton}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost