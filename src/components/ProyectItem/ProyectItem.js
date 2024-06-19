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
          {Object.hasOwn(projectInfo, 'wip') && 
          <div className='flex gap-2 items-center'>
            <span class="relative flex h-3 w-3 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4adf81] opacity-100"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#4adf81]"></span>
            </span>
            WIP
            <span class="relative flex h-3 w-3 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4adf81] opacity-100"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#4adf81]"></span>
            </span>
          </div>
          }
          {skill.sort().map((name, index)=>{return(
            <div key={index} className='text-[#4adf81]'>»<span className='ml-[.35rem] text-slate-200'>{name}</span></div>
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