import connectToDb from '@/lib/connectToDb'
import { Reservation } from '@/lib/models'
import { getSession, getUser, logout } from '@/lib/action'
import { redirect } from 'next/navigation'

const MyReservation = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/')
  }
  const userEmail = session?.user?.email
  await connectToDb()
  const reservations = await Reservation.find({ email: userEmail }).sort({
    from: 1,
  })

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {reservations.map((reservation: any) => (
        <div
          key={reservation._id}
          className='w-1/3 max-sm:w-full border border-gray-300 p-3 m-3'
        >
          <p>{reservation.email}</p>
          <p>{reservation.vehicle}</p>
          <p>from: {reservation.from.toLocaleDateString()}</p>
          <p>to: {reservation.to.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}

export default MyReservation
