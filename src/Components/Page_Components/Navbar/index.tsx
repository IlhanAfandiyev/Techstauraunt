import { useState, useEffect } from 'react'
import style from "./style.module.css"
import Logo from "../../../assets/imgs/Restaurant-Logo-PNG-Clipart.png"
import burger from "../../../assets/svgs/burger-solid.svg"
import NavSidebar from './NavSidebar'
import LoginAlert from '../../Custom/Alerts/Login/Index'
import { Link } from 'react-router-dom'
import Magni from "../../../assets/svgs/magnifying-glass-solid.svg"
import Search from './NavSearch'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchOpen, setSearch] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("User")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

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

  const closeAlert = () => {
    setAlertMessage(null)
  }

  return (
    <>
      <div className="container">
        <div className={style.Navbar}>
          <div className={style.left}>
            <img src={Logo} alt="" />
            <h3>Techstaurant</h3>
          </div>

          <div className={style.middle}>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/restaurants'>Restaurants</Link>
              <Link to='/FAQ'>FAQ</Link>
              <Link to='/About'>About Us</Link>
            </li>
          </div>

          <div className={style.right}>
            <img
              src={Magni}
              alt=""
              className={style.magnifying}
              onClick={() => setSearch(!searchOpen)}
            />

            {!isLoggedIn ? (
              <>
                <button className={style.LoginButton} onClick={handleLogin}>Log In</button>
                <button className={style.RegisterButton} onClick={handleRegister}>Register</button>
              </>
            ) : (
              <button className={style.RegisterButton} onClick={handleLogout}>Log Out</button>
            )}

            <img
              src={burger}
              alt=""
              onClick={toggleSidebar}
              className={style.BurgerIcon}
            />
          </div>
        </div>

        <div
          className={`${style.SidebarOverlay} ${sidebarOpen ? style.Show : ""}`}
          onClick={toggleSidebar}
        >
          <div className={style.SlideSidebar} onClick={(e) => e.stopPropagation()}>
            <NavSidebar />
          </div>
        </div>

        <div className={`${style.searchModal} ${searchOpen ? style.searchModalOpen : ""}`}>
          <Search />
        </div>
      </div>

      {alertMessage && <LoginAlert message={alertMessage} onClose={closeAlert} />}
    </>
  )
}

export default Navbar
