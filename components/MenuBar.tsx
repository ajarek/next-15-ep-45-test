import Link from 'next/link'


const MenuBar = () => {
  return (
    <div className='w-full h-16 px-10 border-b-2 border-gray-400 flex items-center justify-end'>
      <div className='flex items-center gap-5'>
      <Link className="border border-amber-400 px-4 py-1 rounded-sm hover:bg-orange-500 duration-500 " href='/signup'>SignUp</Link>
      <Link className="border border-amber-400 px-4 py-1 rounded-sm hover:bg-sky-500 duration-500" href='/login'>Login</Link>
      </div>
    </div>
  )
}

export default MenuBar