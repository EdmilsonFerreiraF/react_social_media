import TypeList from "./TypeList"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"

import styles from "./style.module.css"

import { baseUrl } from "constants/baseUrl"
import { useRequestImage } from 'hooks/useRequestImage'
import { sendData, uploadPostPic } from 'apiCalls'
import { useForm } from "hooks/useForm"
import { v4 } from 'uuid'
import noProfilePicture from 'img/person/no_person.jpg'
import { ClickAwayListener } from "@mui/material"

const CreatePost = () => {
    const { user } = useContext(AuthContext)

    const { form, onChange } = useForm({ description: '', file: '', isActive: false })

    const generateImgId = () => {
        return v4()
    }

    const submitHandler = async e => {
        e.preventDefault()

        const url = `${baseUrl}/post`

        const newPost = {
            description: form.description,
            image: generateImgId()
        }

        uploadPostPic(form.file, newPost.image)
        sendData(url, "post", newPost)
    }

    const inputHandler = (e) => {
        onChange(e.target.value, e.target.name)
    }

    const activeCreationHandler = (e) => {
        onChange(!form.isActive, "isActive")
    }
    const handleClickAway = () => {
        onChange(false, "isActive")
      };
    
    const profilePicture = useRequestImage("profile", user?.profilePicture)

    return (
        <div className={styles.createPost}>
            <div className={styles.createPostContainer}>
                <div className={styles.createPostContent}>
                    <img className={styles.profileImg}
                        id="profileImg"
                        src={
                            profilePicture ?? noProfilePicture
                        }
                        alt="User profile" />
                        <ClickAwayListener onClickAway={handleClickAway}>

                    <textarea placeholder={form.isActive ? "" : `What's in your mind ${user?.username}?`}
                            name="description"
                            rows={form.isActive ? "4" : "1"}
                            onFocus={activeCreationHandler}
                            className={`${styles.createPostInput} ${form.isActive ? styles.activePostContent : ""}`}
                            value={form.description}
                            onChange={inputHandler} />
                            </ClickAwayListener>
                </div>
                <hr className={styles.createPostDivision} />
                <form aria-labelledby="create-post" className={styles.createPostBotbar}
                        onSubmit={submitHandler}>
                    <TypeList
                        setFile={onChange}
                        inputHandler={inputHandler} />

                    <button className={styles.createPostButton}
                        type="submit"
                        disabled={
                            (!form.description || form.description === "") && !form.file
                        }
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost