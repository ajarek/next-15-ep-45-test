'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='font-mono flex flex-col items-center justify-center min-h-screen   gap-16 '>
      <h2 className='text-2xl text-red-500'>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className='bg-red-400 text-white px-4 py-2 rounded-md shadow-xl hover:bg-red-500'
      >
        Try again
      </button>
      <Link
        href='/'
        className='className=" bg-sky-500 text-white px-4 py-2 rounded-sm hover:bg-sky-600 duration-500"'
      >
        Back Home
      </Link>
    </div>
  )
}
