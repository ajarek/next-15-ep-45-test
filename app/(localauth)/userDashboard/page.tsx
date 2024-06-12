import { FaUserCircle } from 'react-icons/fa'

const UserDashboardPage = () => {
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center gap-10 '>
      <h1 className='w-full text-center text-3xl'>User Profile</h1>
      <div className='w-full grid grid-cols-2 gap-4 place-items-center  '>
        <div className='flex flex-col items-center '>
          <FaUserCircle
            size={60}
            className='text-amber-500'
          />
          <p>Upload Image</p>

        </div>
        <div className='w-full flex flex-col gap-3 px-36 max-sm:px-4'>
          <h2 className='w-full text-2xl font-semibold text-green-300 '>User Details</h2>
          <p>User Name</p>
          <p>DOB</p>
          <p>ID Proof</p>
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
