import React from 'react'
import style from "./style.module.css"
import Doner from "../../../../assets/imgs/beautiful-traditional-turkish-doner-cooked-in-a-hot-fire-video.jpg"
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <div className='container'>
      <div className={style.CardContainer}>
        <Link to="/restaurant" className={style.FirstCard}>
          <div className={style.imageContainer}>
            <img src={Doner} alt="" />
            <p>Seidin Doneri</p>
          </div>
        </Link>
        <Link to="/restaurant" className={style.FirstCard}>
          <div className={style.imageContainer}>
            <img src={Doner} alt="" />
            <p>Seidin Doneri</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomeMain
