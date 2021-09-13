import router from '@/router'
import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.reponse !== undefined) {
            if (
                error.response.data.msg &&
                error.response.data.msg === 'Invalid auth token provided'
            ) {
                router.push({ name: 'Login' })
            }
            return error.response
        }
        return error
    }
)

export default http
