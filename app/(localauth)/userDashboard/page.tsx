import { FaUserCircle } from 'react-icons/fa'
import { getSession, getUser, logout } from '@/lib/action'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const UserDashboardPage = async () => {
  const session = await getSession()
  console.log(session)
  if (!session) {
    redirect('/')
  }
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center gap-10 '>
      <h1 className='w-full text-center text-3xl'>User Profile</h1>
      <div className='w-full grid grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center  '>
        <div className='flex flex-col items-center '>
          {session.user.img ? (
            <Image
              src={session.user.img}
              alt={session.user.name}
              width={60}
              height={60}
              className='rounded-full'
            />
          ) : (
            <FaUserCircle
              size={60}
              className='text-amber-500'
            />
          )}

        </div>
        <div className='w-full flex flex-col items-center gap-3  px-36 max-sm:px-2'>
          <h2 className='w-full text-2xl text-center font-semibold text-green-300 '>
            User Details
          </h2>
          <p>name: {session.user.username}</p>
          <p>email: {session.user.email}</p>
          <p>registered at: {(session.user.createdAt).toString().slice(0, 10)}</p>
          
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
