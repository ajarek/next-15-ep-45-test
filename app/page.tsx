import DashBoard from '@/components/DashBoard'
import MenuBar from '@/components/MenuBar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='font-sans flex flex-col items-center justify-start min-h-screen gap-8 bg-cyan-900 text-white'>
      <MenuBar />
      <DashBoard />
    </div>
  )
}
