import React from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white font-mono px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
      >
        Go to Home
      </button>
    </div>
  )
}

export default NotFound
