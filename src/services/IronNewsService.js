import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:5000", 
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

const login = ({email, password})=> http.post("/login", {email, password})
const logout = () => http.post("/logout")

/*
TO-DO

=> {/} => qué enseñar y como
=> componentes de NAVBAR, SIDEBAR



*/



export default {

  login,
  logout, 
  
}