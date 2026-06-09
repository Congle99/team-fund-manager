export const auth = {
  login: () => {
    localStorage.setItem("token", "fake-token")
  },

  logout: () => {
    localStorage.removeItem("token")
  },

  isLoggedIn: () => {
    return localStorage.getItem("token") !== null
  }
}