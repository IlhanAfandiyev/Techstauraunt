import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.css'

type Props = {
  message: string
  onClose: () => void
}

const LoginAlert = ({ message, onClose }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [onClose])

  return ReactDOM.createPortal(
    <div className={style.AlertOverlay}>
      <div className={style.LoginAlert}>{message}</div>
    </div>,
    document.body
  )
}

export default LoginAlert
