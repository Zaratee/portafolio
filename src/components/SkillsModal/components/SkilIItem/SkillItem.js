import React from 'react'

export const SkillItem = (props) => {
    const {skill} = props
  return (
    <div className='bg-[#464646] rounded-full text-white  h-fit py-1 px-6 cursor-default border border-slate-200 hover:border-[#4adf81]'>
        {skill}
    </div>
  )
}

