import React from 'react'
import ProyectItem from 'src/components/ProyectItem'

export const ProyectsContainer = () => {
  return (
    <div className=' flex justify-center items-center bg '>
        <div className='w-[70%] h-[100%] flex flex-wrap justify-evenly gap-6 py-5  min-h-[90%] overflow-y-scroll'>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>

        </div>
    </div>
  )
}
