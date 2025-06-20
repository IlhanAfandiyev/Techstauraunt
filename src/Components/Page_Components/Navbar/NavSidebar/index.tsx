import  { useEffect, useState } from 'react'
import style from "./style.module.css"
import LoginAlert from '../../../Custom/Alerts/Login/Index'

const NavSidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string | null>(null)

  useEffect(() => {
    const user = localStorage.getItem("User")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    localStorage.setItem("User", "true")
    setIsLoggedIn(true)
    setAlertMessage("Welcome back user!")
  }

  const handleRegister = () => {
    localStorage.setItem("User", "true")
    setIsLoggedIn(true)
    setAlertMessage("Welcome!")
  }

  const handleLogout = () => {
    localStorage.removeItem("User")
    setIsLoggedIn(false)
  }

  return (
    <>
      <ul className={style.Sidebar}>
        <li className={style.SidebarItem}>Home</li>
        <li className={style.SidebarItem}>Restaurants</li>
        <li className={style.SidebarItem}>Orders</li>
        <li className={style.SidebarItem}>Profile</li>

        {!isLoggedIn ? (
          <>
            <li className={style.SidebarItem} onClick={handleLogin}>Log In</li>
            <li className={style.SidebarItem} onClick={handleRegister}>Register</li>
          </>
        ) : (
          <li className={style.SidebarItem} onClick={handleLogout}>Logout</li>
        )}
      </ul>

      {alertMessage && <LoginAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}
    </>
  )
}

export default NavSidebar
