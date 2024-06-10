import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Skills = () => {
  const navigate = useNavigate()
  return (
    <div className=' w-full h-[100vh] relative'>
      <div className='font-bebas font-bold text-9xl text-white '>Skills</div>
      <div onClick={()=>navigate('/Main/proyects')} className='absolute right-4 bottom-3 text-white font-bebas underline select-none cursor-pointer hover:scale-125 transition-all'>Back</div>
    </div>
  )
}

