import React from 'react'
import ProyectItem from 'src/components/ProyectItem'

export const ProyectsContainer = () => {
  return (
    <div className=' flex justify-center items-center h-[100vh] w-[100vw]'>
        <div className='w-[70%] h-[100vh]  flex flex-wrap justify-evenly gap-6 py-5  overflow-y-scroll '>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>

        </div>
    </div>
  )
}
