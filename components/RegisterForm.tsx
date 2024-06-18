'use client'

import { useState } from 'react'
import { User, UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin, setIsAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='max-w-xl mx-auto flex flex-col justify-center items-center min-h-screen'>
      <div className='flex justify-center p-2'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold text-center'>User Sign Up</h1>
          <FaUserCircle
            size={60}
            className=' mx-auto my-5'
          />
        </Link>
      </div>
      <form
        className='w-full px-10 py-5 bg-blue-500 rounded-sm'
        onSubmit={handleSubmit}
      >
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>User name</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>User photo</label>
          <input
            type='text'
            value={img}
            onChange={(e) => setImage(e.target.value)}
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <fieldset className='flex flex-col my-3'>
          <button
            className='bg-orange-500 py-1 rounded-sm font-semibold text-xl'
            type='submit'
          >
            Sign Up
          </button>
        </fieldset>
        <Link
          href='/login'
          className='text-white'
        >
          You have an account?{' '}
          <b className='border-b-2 border-orange-500'>Login</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
