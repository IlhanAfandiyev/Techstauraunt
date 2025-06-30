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
    <div className={style.Ad}> <div className="w-full max-w-5xl mx-auto mt-16 bg-black text-white font-mono rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row items-center lg:items-stretch">
  <div className="w-full lg:w-1/2 h-52 lg:h-auto flex items-center justify-center bg-white">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
      alt="Ad Banner"
      className="w-32 h-32 object-contain"
    />
  </div>
  <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4">
    <h2 className="text-3xl font-bold uppercase tracking-wider">Feeling Hungry?</h2>
    <p className="text-sm lg:text-base leading-relaxed">
      Discover the best local restaurants and get your meals delivered hot and fast. Techstaurant connects you with taste and convenience in one click.
    </p>
    <button
      onClick={() => navigate('/')}
      className="mt-2 px-6 py-2 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-300"
    >
      Start Exploring
    </button>
  </div>
</div>

</div>
  

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
