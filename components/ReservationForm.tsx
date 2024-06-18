'use client'

import { FaCarSide } from "react-icons/fa"
import {useRef} from 'react'
import { addReservation } from "@/lib/action"


const ReservationForm = ({email}:{email:string}) => {
  const ref = useRef<HTMLFormElement>(null)
  

  return (
    <div className=' mx-auto flex justify-center items-center min-h-screen'>
      <form
          action={async (formData) => {
            
            await addReservation(formData)
            ref.current?.reset()
          
        }
      }
        className='w-full px-10 max-sm:px-10 py-5 bg-blue-500 rounded-sm'
      >
        <h1 className='text-3xl font-semibold text-center'>Reserve Vehicle</h1>
        <FaCarSide size={60} className="text-orange-500 mx-auto mt-2"/>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>Vehicle Type</label>
          <select
            name='vehicle'
            id=''
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          >
            <option value=''>--Select--</option>
            <option value='Bike'>Bike</option>
            <option value='car'>Car</option>
            <option value='bus'>Bus</option>
            <option value='bicycle'>Bicycle</option>
          </select>
        </fieldset>

        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>From(Date)</label>
          <input
            type='date'
            name='from'
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>To(Date)</label>
          <input
            type='date'
            name='to'
            className='text-gray-700 outline-none border border-amber-300 p-1 rounded-sm'
          />
        </fieldset>
        <fieldset className='flex flex-col my-3'>
          <label htmlFor=''>With Driver</label>
          <div className="flex gap-4 items-center">
            <input
              type='radio'
              id='drive'
              name='drive'
              value='drive'
              className="w-8 h-8 border-2 border-orange-500 checked:border-black"
            />
            <label htmlFor='drive'>Yes</label>
          
         
            <input
              type='radio'
              id='nodrive'
              name='drive'
              value='nodrive'
              className="w-8 h-8 border-4 border-orange-500 checked:border-black"
            />
            <label htmlFor='drive'>No</label>
          </div>
        </fieldset>
        <fieldset className='flex justify-center my-3 text-xl'>
          <label htmlFor=''>Total Amount to be Paid: 150 $</label>
          
        </fieldset>
        <input type='hidden' name='email' value={email} />
        <fieldset className='flex flex-col my-3'>
          <button className='bg-orange-500 py-1 rounded-sm font-semibold text-xl'>
           Book
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default ReservationForm
