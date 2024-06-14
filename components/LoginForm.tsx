'use client'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { LoginSchema } from '@/lib/zodSchema'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorEmail('')
    setErrorPassword('')
    const formData = LoginSchema.safeParse({ email, password })

    if (formData.success === false) {
      formData.error.issues.map((el) => {
        if (el.path[0] === 'email') {
          setErrorEmail(el.message)
        } else if (el.path[0] === 'password') {
          setErrorPassword(el.message)
        }
      })
    }else{
     console.log( formData.data?.email)
      setEmail('')
      setPassword('')
    }

    
   
  }

  return (
    <div className='max-w-xl mx-auto flex justify-center items-center min-h-screen'>
      <form
        onSubmit={handleFormSubmit}
        className='w-full px-10 py-5 bg-blue-500 rounded-sm'
      >
        <h1 className='text-3xl font-semibold text-center'>User Login</h1>
        <FaUserCircle
          size={60}
          className=' mx-auto my-5'
        />

        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            name=''
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
          {errorEmail && <p className='text-red-700 '>{errorEmail}</p>}
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            name=''
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
          {errorPassword && <p className='text-red-700 '>{errorPassword}</p>}
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
