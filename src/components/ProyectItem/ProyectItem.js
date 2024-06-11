import React from 'react'

export const ProyectItem = () => {
  return (
    <div className='p-3 border border-[#373e48] text-white bg-[#22272e]  md:w-[45%] w-[95%] h-[250px] rounded-md flex flex-col hover:opacity-95 hover:border-[#767f8a] hover:shadow-xl hover:shadow-[#2e2e2e] shadow-slate-800 shadow'>
        <div className=' self-end'>icon</div>
        <div>Nombre proyecto</div>
        <div>Descripci'on</div>
        <div>Tecnologies</div>
    </div>
  )
}