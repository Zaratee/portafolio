import React from 'react'

export const ProyectItem = (props) => {
  const {projectInfo} = props
  const {name, techno, description, gitUrl, type, skill } = projectInfo
  return (
    <div className='  p-5 border border-[#373e48] text-white bg-[#22272e] w-[80%]  md:w-[280px]  lg:w-[400px] h-fit rounded-md flex flex-col  hover:opacity-95 hover:border-[#767f8a] hover:shadow-xl hover:shadow-[#2e2e2e] shadow-slate-800 shadow'>
        <div className=' self-end '>
          <techno.logo/>
        </div>
        <div className=' text-4xl font-bold font-bebas mt-2'>{name}</div>
        <div className=' text-sm  text-slate-400 font-light'>{type}</div>
        <div className=' font-light mt-3 text-slate-200'>{description}</div>
        <div className='mt-2 '>
          {skill.sort().map((name)=>{return(
            <div className='text-[#4adf81]'>»<span className='ml-[.35rem] text-slate-200'>{name}</span></div>
          )})}
        </div>
        {
          gitUrl && 
            <div onClick={()=>window.open(gitUrl)} className=' select-none w-full p-3 text-center hover:bg-[#181c21] cursor-pointer mt-4'>
              {gitUrl.search('github') > 0 ? 'Github Repository': 'Web Page'}
            </div>
        }
    </div>
  )
}