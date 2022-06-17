import React, { FormEvent } from "react"
import { v4 } from 'uuid'

import { baseUrl } from "constants/baseUrl"
import { useForm } from "hooks/useForm"
import { sendData, uploadPostPic } from 'apiCalls'
import ElementList from "./ElementList"
import styles from "./style.module.css"
import Content from "./Content"

const CreatePost = () => {
    const { form, onChange } = useForm({
        description: '',
        file: '',
        isActive: false
    })

    const generateImgId = () => {
        return v4()
    }

    const submitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        const url = `${baseUrl}/post`

        const newPost = {
            description: form.description,
            image: generateImgId()
        }

        uploadPostPic(form.file, newPost.image)
        sendData(url, "post", newPost)
    }

    const inputFileHandler = (e: FormEvent) => {
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]

        onChange(file, "file")
    }

    const inputHandler = (e: FormEvent) => {
        const target = e.target as HTMLInputElement
        const value: string = target.value
        const name: string = target.name

        onChange(value, name)
    }

    return (
        <form data-testid="createPost"
            className={styles.createPost}>
            <div className={styles.createPostContainer}>
               <Content inputHandler={inputHandler} />
                <hr className={styles.createPostDivision} />
                <div aria-labelledby="create-post"
                    className={styles.createPostBotbar}
                    onSubmit={submitHandler}>
                    <ElementList
                        inputFileHandler={inputFileHandler}
                        inputHandler={inputHandler} />

                    <button className={styles.createPostButton}
                        type="submit"
                        disabled={
                            (!form.description ||
                                form.description === "") &&
                            !form.file
                        }
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CreatePost