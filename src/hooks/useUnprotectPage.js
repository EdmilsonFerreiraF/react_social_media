import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { goToIndex } from '../routes/coordinator';

export const useUnprotectPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToIndex(navigate)
        }
    }, [navigate])
}