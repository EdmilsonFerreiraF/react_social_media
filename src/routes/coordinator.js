export const goToIndex = (navigate) => {
    navigate('/')
}

export const goToProfile = (navigate, username) => {
    navigate(`/profile/${username}`)
}

export const goToSignup = (navigate) => {
    navigate('/signup')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}