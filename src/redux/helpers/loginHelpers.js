export const setUser = user=>{
  localStorage.setItem("user", user ? JSON.stringify(user): null)
}