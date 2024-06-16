import { redirect } from 'next/navigation'
import { logout } from '@/lib/action'

const Logout = () => {
  return (
    <form
      action={async () => {
         "use server"
        await logout()
        redirect('/')
      }}
    >
      <button className='bg-red-500 py-1 px-4 ' type='submit'>Logout</button>
    </form>
  )
}

export default Logout
