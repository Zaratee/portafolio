import React, { useContext } from 'react'
import ProyectItem from 'src/components/ProyectItem'
import { FilterContext } from 'src/context/filterContext'
import { allProjects } from 'src/proyectsData'

export const ProyectsContainer = () => {
  const filterSelection = useContext(FilterContext)

  return (
    <div className=' flex justify-center items-center h-[100vh] w-[100vw]'>
        <div className='w-[80%] h-[100vh] !flex-col md:!flex-row flex justify-center  md:py-5  md:overflow-y-scroll  gap-6 mb-5'>
          <div className='hidden md:flex flex-col gap-6 items-center md:items-end  h-fit'>
            {
              allProjects.slice(0, allProjects.length/2).filter((project) => filterSelection.filterSelection === 'All' ? project : project.techno.name === filterSelection.filterSelection).map((projectInfo, index)=>{
                return(
                  <ProyectItem key={index} projectInfo={projectInfo}/>
                )})
            }
          </div>
          <div className='md:flex flex-col gap-6 items-center md:items-start  h-fit hidden'>
            {
              allProjects.slice(allProjects.length/2, allProjects.length).filter((project) => filterSelection.filterSelection === 'All' ? project : project.techno.name === filterSelection.filterSelection).map((projectInfo, index)=>{
                return(
                  <ProyectItem key={index} projectInfo={projectInfo}/>
                )})
            }
          </div>
          <div className='flex md:hidden flex-col items-center overflow-y-scroll gap-6 pt-5  h-[100%]'>
            {
              allProjects.filter((project) => filterSelection.filterSelection === 'All' ? project : project.techno.name === filterSelection.filterSelection).map((projectInfo, index)=>{
                return(
                  <ProyectItem key={index} projectInfo={projectInfo}/>
                )})
            }
          </div>
        </div>
    </div>
  )
}
