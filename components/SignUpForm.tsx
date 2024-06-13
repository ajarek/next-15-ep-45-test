import { FaUserCircle } from "react-icons/fa"

const SignUpForm = () => {
  return (
    <div className='max-w-xl mx-auto flex justify-center items-center min-h-screen'>
      <form action="" className='w-full px-10 py-5 bg-blue-500 rounded-sm'>
        <h1 className='text-3xl font-semibold text-center'>User Sign Up</h1>
        <FaUserCircle size={60} className=' mx-auto my-5' />
        <fieldset className='flex flex-col my-3'>
          <label htmlFor="">User name</label>
          <input type="text" name="" className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm' />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor="">Email</label>
          <input type="email" name="" className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm' />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor="">Password</label>
          <input type="password" name="" className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm' />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor="">DOB</label>
          <input type="date" name="" className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm' />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor="">ID Number</label>
          <input type="text" name="" className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm' />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
         <button className='bg-orange-500 py-1 rounded-sm font-semibold text-xl'>Sign Up</button>
        </fieldset>
      </form>
    </div>
  )
}

export default SignUpForm