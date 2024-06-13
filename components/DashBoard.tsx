import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarSide, FaBusAlt } from "react-icons/fa"
import { BsBicycle } from "react-icons/bs"
const DashBoard = () => {
  return (
    <div className='w-full max-w-4xl flex flex-col  mx-auto my-10 '>
       <h1 className="text-3xl text-orange-500 font-semibold text-center mb-8">Monthly Reports</h1>
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-8 px-10'>
       
        <div className='flex flex-col shadow-md shadow-gray-300 items-center px-8 py-2 gap-4 w-40 rounded-lg'>
          <h1 className='text-2xl font-semibold'>Bike</h1>
          <RiMotorbikeFill size={60} className="text-orange-500" />
          <div>Chart</div>
        </div>
        <div  className='flex flex-col shadow-md shadow-gray-300 items-center px-8 py-2 gap-4 w-40 rounded-lg'>
          <h1 className='text-2xl font-semibold'>Car</h1>
          <FaCarSide size={60} className="text-orange-500"/>
          <div>Chart</div>
        </div>
        <div  className='flex flex-col shadow-md shadow-gray-300 items-center px-8 py-2 gap-4 w-40 rounded-lg'>
        <h1 className='text-2xl font-semibold'>Bus</h1>
        <FaBusAlt size={60} className="text-orange-500"/>
          <div>Chart</div>
        </div>
        <div  className='flex flex-col shadow-md shadow-gray-300 items-center px-8 py-2 gap-4 w-40 rounded-lg'>
        <h1 className='text-2xl font-semibold'>Bicycle</h1>
        <BsBicycle size={60} className="text-orange-500" />
          <div>Chart</div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
