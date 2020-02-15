import axios from "axios"

const http = axios.create({
  baseURL: process.env.IRON_NEWS_API_URL, 
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error)
  }
)

const login = ({email, password} )=> http.get("/login", {email, password})



export default {

  login
}