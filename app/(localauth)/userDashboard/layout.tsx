import Link from 'next/link'

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=' flex flex-row '>
      <div className='min-h-screen bg-cyan-700 px-5 py-10'>
        <h1 className='text-sky-300 font-bold text-2xl'>User Dashboard</h1>
        <div className='flex flex-col gap-5 mt-10 '>
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
            href='/'
            className='border-b border-gray-300'
          >
            My Booking
          </Link>
        </div>
      </div>
      <div className='w-full p-10 bg-cyan-900 text-white'>{children}</div>
    </div>
  )
}
