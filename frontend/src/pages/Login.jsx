import { useNavigate } from "react-router-dom"
import { auth } from "../utils/auth"
import { useState } from "react"

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      alert("Nhập đầy đủ thông tin")
      return
    }

    auth.login()
    navigate("/")
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Login FundFlow
      </h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  )
}