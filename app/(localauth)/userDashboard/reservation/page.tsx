import ReservationForm from '@/components/ReservationForm'
import { getSession, getUser, logout } from '@/lib/action'

const Reservation =async () => {
  const session = await getSession()
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center '>
      <ReservationForm email={session?.user?.email}/>
    </div>
  )
}

export default Reservation