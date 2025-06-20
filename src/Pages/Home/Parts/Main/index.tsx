import React, { useState } from 'react'
import style from "./style.module.css"
import Doner from "../../../../assets/imgs/XL.webp"
import { useNavigate } from 'react-router-dom'

const HomeMain = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    const user = localStorage.getItem("User")
    if (user) {
      navigate("/restaurant")
    } else {
      setShowModal(true)
    }
  }

  return (
    <div className='container'>
      <div className={style.CardContainer}>
        <div className={style.FirstCard} onClick={handleClick}>
          <div className={style.imageContainer}>
            <img src={Doner} alt="" />
            <p>Seidin Doneri</p>
          </div>
        </div>
        <div className={style.FirstCard} onClick={handleClick}>
          <div className={style.imageContainer}>
            <img src={Doner} alt="" />
            <p>Seidin Doneri</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <p className={style.modalText}>You must be logged in to view this restaurant.</p>
            <button onClick={() => setShowModal(false)} className={style.modalButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeMain
