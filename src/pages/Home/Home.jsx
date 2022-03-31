import MainAppBar from '../../components/MainAppBar/MainAppBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import MessagesBar from '../../components/MessagesBar/MessagesBar'
import { useProtectPage } from '../../hooks/useProtectPage'

import styles from "./Home.module.css"
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../constants/baseUrl'
import { AuthContext } from "../../context/AuthContext"

const Home = () => {
    useProtectPage()

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const token = localStorage.getItem('token')
    
    useEffect(() => {
        const getUser = async() => {
            dispatch({ type: "LOGIN_START" })

            try {
                await axios
                .get(`${baseUrl}/user`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res => {
                    dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
                    console.log('res.data', res.data)
                })
                .catch(err => console.log(err))
            } catch (err) {
                dispatch({ type: "LOGIN_FAILED", payload: err })
            }
        }

        if (!user) {
            getUser()
        }
    }, [token])

    return (
        <>
            <MainAppBar user={user} />
            <div className={styles.homeContainer}>
                <Sidebar />
                <Feed />
                <MessagesBar />
            </div>
        </>
    )
}

export default Home