import  { useState } from 'react'
import style from "./style.module.css"
import Resarvation from '../ReservationForm'

const Room = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', type: 'Deluxe', capacity: '2 Guests', status: 'available' },
    { id: 2, name: 'Room 102', type: 'Standard', capacity: '1 Guest', status: 'booked' }
  ])

  const [showModal, setShowModal] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<{ id: number, name: string } | null>(null)

  const openModal = (roomId: number, roomName: string) => {
    setSelectedRoom({ id: roomId, name: roomName })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedRoom(null)
  }

  const reserveRoom = () => {
    if (!selectedRoom) return
    setRooms(prev =>
      prev.map(room =>
        room.id === selectedRoom.id ? { ...room, status: 'booked' } : room
      )
    )
    closeModal()
  }

  const unbookRoom = (roomId: number) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId ? { ...room, status: 'available' } : room
      )
    )
  }

  return (
    <div className="container mb-[20%]">
      <h1 className={style.pageTitle}>Available Rooms</h1>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Room</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.id}>
                <td>{room.name}</td>
                <td>{room.type}</td>
                <td>{room.capacity}</td>
                <td className={room.status === 'available' ? style.available : style.booked}>
                  {room.status}
                </td>
                <td>
                  {room.status === 'available' ? (
                    <button className={style.bookBtn} onClick={() => openModal(room.id, room.name)}>
                      Reserve
                    </button>
                  ) : (
                    <button className={style.unbookBtn} onClick={() => unbookRoom(room.id)}>
                      Unbook
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedRoom && (
        <Resarvation
          onClose={closeModal}
          onConfirm={reserveRoom}
          roomName={selectedRoom.name}
        />
      )}
    </div>
  )
}

export default Room
