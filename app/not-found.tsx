import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="font-mono  min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center ">
      <>
        <h1 className="text-2xl">There was a problem.</h1>
        <p>We could not find the page you were looking for.</p>
        <div>
          Go back to the{' '}
          <Link className="underline text-blue-500 text-2xl hover:text-blue-600" href="/">
            Home
          </Link>
          .
        </div>
      </>
    </main>
  )
}
