import { useState } from 'react'
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
    <div className='container mb-[15%]'>
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

      {/* 🔽 Ad Block */}
    <div className={style.Ad}> <div className="max-w-3xl mx-auto mt-12 bg-black text-white font-mono p-6 rounded-md shadow-md flex  sm:flex-row items-center gap-6">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
    alt="Ad Banner"
    className="w-28 h-28 object-contain"
  />
  <div className="text-center sm:text-left">
    <h2 className="text-2xl font-bold mb-2">Hungry?</h2>
    <p className="text-sm mb-4">Order now and get your food delivered fresh & fast from Techstaurant.</p>
    <button
      onClick={() => navigate('/')}
      className="bg-white text-black px-4 py-2 border-2 border-white hover:bg-transparent hover:text-white transition"
    >
      Start Exploring
    </button>
  </div>
</div>
<div className="max-w-3xl mx-auto mt-12 bg-black text-white font-mono p-6 rounded-md shadow-md flex flex-col sm:flex-row items-center gap-6">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
    alt="Ad Banner"
    className="w-28 h-28 object-contain"
  />
  <div className="text-center sm:text-left">
    <h2 className="text-2xl font-bold mb-2">Hungry?</h2>
    <p className="text-sm mb-4">Order now and get your food delivered fresh & fast from Techstaurant.</p>
    <button
      onClick={() => navigate('/')}
      className="bg-white text-black px-4 py-2 border-2 border-white hover:bg-transparent hover:text-white transition"
    >
      Start Exploring
    </button>
  </div>
</div></div>
  

      {/* 🔽 Modal */}
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
