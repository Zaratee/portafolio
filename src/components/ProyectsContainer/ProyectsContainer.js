import React from 'react'
import ProyectItem from 'src/components/ProyectItem'
import { allProjects } from 'src/proyectsData'

export const ProyectsContainer = () => {
  return (
    <div className=' flex justify-center items-center h-[100vh] w-[100vw]'>
        <div className='w-[80%] h-[100vh] !flex-col md:!flex-row flex justify-center  py-5  overflow-y-scroll  gap-6 mb-5'>
          <div className='flex flex-col gap-6 items-center md:items-end '>
            {
              allProjects.slice(0, allProjects.length/2).map((projectInfo)=>{
                return(
                  <ProyectItem projectInfo={projectInfo}/>
                )})
            }
          </div>
          <div className='flex flex-col gap-6 items-center md:items-start '>
            {
              allProjects.slice(allProjects.length/2, allProjects.length).map((projectInfo)=>{
                return(
                  <ProyectItem projectInfo={projectInfo}/>
                )})
            }
          </div>
        </div>
    </div>
  )
}
