import { FaUserCircle } from 'react-icons/fa'
import { getSession, getUser, logout } from '@/lib/action'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const UserDashboardPage = async () => {
  const session = await getSession()
  
  if (!session) {
    redirect('/')
  }
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center gap-10 '>
      <h1 className='w-full text-center text-3xl'>User Profile</h1>
      <div className='w-full grid grid-cols-2 gap-4 place-items-center  '>
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

          <p>Upload Image</p>
        </div>
        <div className='w-full flex flex-col gap-3 px-36 max-sm:px-4'>
          <h2 className='w-full text-2xl font-semibold text-green-300 '>
            User Details
          </h2>
          <p>{session.user.username}</p>
          <p>DOB</p>
          <p>ID Proof</p>
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
