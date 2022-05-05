import TypeList from "./TypeList/TypeList"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"

import styles from "./CreatePost.module.css"

import { baseUrl } from "constants/baseUrl"
import { useRequestImage } from 'hooks/useRequestImage'
import { sendData, uploadPostPic } from 'apiCalls'
import { useForm } from "hooks/useForm"
import { v4 } from 'uuid'
import noProfilePicture from 'img/person/no_person.jpg'

const CreatePost = () => {
    const { user } = useContext(AuthContext)

    const { form, onChange } = useForm({ description: '', file: '' })

    const submitHandler = async e => {
        e.preventDefault()

        const imgId = v4()

        const url = `${baseUrl}/post`

        const newPost = {
            userId: user?._id,
            description: form.description,
            image: imgId
        }

        uploadPostPic(user, form)
        sendData(url, "post", newPost)
    }

    const inputHandler = (e) => {
        onChange(e.target.value, e.target.name)
    }

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
                    <textarea placeholder={`What's in your mind ${user?.username}?`}
                            name="description"
                            className={styles.createPostInput}
                            value={form.description}
                            onChange={inputHandler} />
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