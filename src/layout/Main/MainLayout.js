import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Tecnologies from 'src/components/Tecnologies';
import WelcomeMessage from 'src/components/WelcomeMessage';

export const MainLayout = () => {
    const [messegeStatus, setMessegeStatus] = useState(false);//true
    const [isFilterActive, setIsFilterActive] = useState(undefined)
    const navigate = useNavigate()
    const changeMessageStatus = () => {
        setMessegeStatus(false)
    }

    const handlerShowFilter = (value) => {
        setIsFilterActive(value)
      }
    

  return (
    <div className=' w-[100vw] h-[100vh] overflow-hidden'>
              {messegeStatus && <WelcomeMessage changeMessageStatus={changeMessageStatus}/> }
              {!messegeStatus && 
              <div className='relative'>
                <div onClick={()=>handlerShowFilter(true)} className={`font-bold text-2xl z-10 -right-5 hover:-right-3 bg-[#cecece] top-[40%]  transition-all cursor-pointer -rotate-90  pt-3 px-4 pb-6 select-none absolute`}>Filter</div>
                <div onClick={()=>navigate('/Skills')} className={`font-bold text-2xl z-10 -left-5 hover:-left-3 bg-[#cecece] top-[40%]  transition-all cursor-pointer rotate-90  pt-3 px-4 pb-6 select-none absolute`}>Skills</div>
                {isFilterActive && <Tecnologies handlerShowFilter={handlerShowFilter} isFilterActive={isFilterActive}/>} 
                <Outlet/>
             </div> 
             }

    </div>
  )
}

