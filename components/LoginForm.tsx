'use client'

import { FaUserCircle } from 'react-icons/fa'
import { getUser } from '@/lib/action'
import { useRef } from 'react'
import Link from 'next/link'

const LoginForm = () => {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <div className='max-w-xl mx-auto flex justify-center items-center min-h-screen'>
      <form
        action={async (formData) => {
          await getUser(formData)
          ref.current?.reset()
        }}
        className='w-full px-10 py-5 bg-blue-500 rounded-sm'
      >
        <Link href='/'>
          <h1 className='text-3xl font-semibold text-center'>User Login</h1>
          <FaUserCircle
            size={60}
            className=' mx-auto my-5'
          />
        </Link>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Email</label>
          <input
            required
            type='email'
            name='email'
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Password</label>
          <input
            required
            type='password'
            name='password'
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <button className='bg-orange-500 py-1 rounded-sm font-semibold text-xl'>
            Login
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default LoginForm
