import axios from "axios"
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { baseUrl } from 'constants/baseUrl'
import { goToIndex } from 'routes/coordinator'

export const loginCall = async (userCredential, dispatch, navigate) => {
    dispatch({ type: "LOGIN_START" })

    try {
        await axios
        .post(`${baseUrl}/user/login`, userCredential)
        .then(res => {
            localStorage.setItem("token", res.data.token)

            goToIndex(navigate)
        })
        .catch(err => console.log(err))
    } catch (err) {
        dispatch({ type: "LOGIN_FAILED", payload: err })
    }
}

export async function signup(url, data) {
    if (url) { 
      await axios.post(url, data).catch((error) => {
          console.log(error.message)
      })
    }
}

export async function sendData(url, method, data) {
    const token = localStorage.getItem("token")
    console.log('url', url)
    if (url) { 
      await axios[method](url, data, {
          headers: {
            Authorization: token
          }
      }).catch((error) => {

          console.log(error.message)
      })
    }
}

export async function uploadPostPic(user, form, imgId) {
    const storage = getStorage();
    const storageRef = ref(storage, 'posts/' + imgId);

    // Create file metadata including the content type
    const metadata = {
        contentType: 'image',
    };

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, form.file, metadata).then((snapshot) => {
        console.log(snapshot)
      console.log('Uploaded a blob or file!');
    });

}