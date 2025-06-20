import React, { useState } from 'react'
import style from "./style.module.css"

interface Props {
  onClose: () => void
  onConfirm: () => void
  roomName: string
}

const Resarvation: React.FC<Props> = ({ onClose, onConfirm, roomName }) => {
  const [cardNumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [error, setError] = useState("")

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 16)
    const formatted = value.replace(/(.{4})/g, "$1-").slice(0, 19)
    setCardNumber(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const [year, month] = expiryDate.split("-").map(Number)
    const now = new Date()
    const selected = new Date(year, month - 1)

    if (selected <= now) {
      setError("Expiration date must be in the future.")
      return
    }

    setError("")
    onConfirm()
  }

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.title}>Reserve {roomName}</h2>

          <label>Who reserves?</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234-5678-9012-3456"
            value={cardNumber}
            onChange={handleCardChange}
            required
          />

          <label>Expiry Date</label>
          <input
            type="month"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />

          {error && <p className={style.error}>{error}</p>}

          <div className={style.modalActions}>
            <button type="submit" className={style.submitBtn}>Reserve</button>
            <button type="button" className={style.cancelBtn} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Resarvation
