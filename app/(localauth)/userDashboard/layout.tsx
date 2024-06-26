import Link from 'next/link'
import Logout from '@/components/Logout'
export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=' flex flex-row  '>
      <div className='max-sm:w-full min-h-screen bg-cyan-700 px-5 py-10 '>
        <h1 className='text-sky-300 font-bold text-2xl'>User Dashboard</h1>
        <div className='flex flex-col gap-5 mt-10 text-white '>
          <Link
            href='/userDashboard'
            className='border-b border-gray-300'
          >
            Profile
          </Link>
          <Link
            href='/userDashboard/reservation'
            className='border-b border-gray-300'
          >
            Reserve
          </Link>
          <Link
            href='/userDashboard/my-reservations'
            className='border-b border-gray-300'
          >
            My reservations
          </Link>
          <Link
            href='/'
            className='border-b border-gray-300'
          >
            Home
          </Link>
          <Logout />
        </div>
      </div>
      <div className='w-full p-10 max-sm:p-2 bg-cyan-900 text-white'>
        {children}
      </div>
    </div>
  )
}
