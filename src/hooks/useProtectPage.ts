import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import { goToLogin } from 'routes/coordinator';

export const useProtectPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(navigate)
        }
    }, [navigate])
}