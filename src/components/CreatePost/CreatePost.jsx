import TypeList from "./TypeList/TypeList"

import styles from "./CreatePost.module.css"

const CreatePost = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={styles.createPost}>
            <div className={styles.createPostContainer}>
                <div className={styles.createPostContent}>
                    <img className={styles.profileImg} src={`${publicFolder}person/1.jpeg`} alt="" />
                    <input placeholder="What's in your mind?"
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