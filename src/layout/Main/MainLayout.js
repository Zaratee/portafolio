import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import JavaIcon from 'src/assets/icons/java';
import KotlinIcon from 'src/assets/icons/kotlin';
import ReactIcon from 'src/assets/icons/react';
import VueIcon from 'src/assets/icons/vue';
import SkillsModal from 'src/components/SkillsModal';
import Tecnologies from 'src/components/Tecnologies';
import WelcomeMessage from 'src/components/WelcomeMessage';
import { FilterContext } from 'src/context/filterContext';

export const MainLayout = () => {
    const [messegeStatus, setMessegeStatus] = useState(true);//true
    const [isFilterActive, setIsFilterActive] = useState(undefined)
    const [isSkillsActive, setIsSkillsActive] = useState(false)
    const [filterSelection, setFilterSelection] = useState('All')
    
    const changeMessageStatus = () => {
        setMessegeStatus(false)
    }

    const handlerShowFilter = (value) => {
        setIsFilterActive(value)
      }
    
    const handleShowSkillsModal = (value) => {
      setIsSkillsActive(value)
    }

    const renderSwitchFilterIcon = () => {
      switch(filterSelection) {
        case 'React':
          return <ReactIcon size='1.6rem'/>;
        case 'Vue':
          return <VueIcon width='1.4rem' height='1.4rem'/>;
        case 'Kotlin':
          return <KotlinIcon size='1.20rem'/>;
        case 'Java':
          return <JavaIcon size='1.6rem'/>;
        default:
          return 'All';
      }
    }

  return (
    <div className=' w-[100vw] h-[100vh] overflow-hidden relative'>
        <FilterContext.Provider value={{filterSelection:filterSelection, setFilterSelection:setFilterSelection}}>
          {!messegeStatus && <div className=' rounded-full flex items-center justify-center w-[40px] h-[40px] bg-[#22272e] absolute font-bold select-none right-3 top-3 text-white'>{renderSwitchFilterIcon()}</div>}
          <SkillsModal isSkillsActive={isSkillsActive} handleShowSkillsModal={handleShowSkillsModal}/>
          {messegeStatus && <WelcomeMessage changeMessageStatus={changeMessageStatus} /> }
          {!messegeStatus && 
            <div className='relative'>
              <div onClick={()=>handlerShowFilter(true)} className={`font-bold text-2xl z-10 -right-5 hover:-right-3 bg-[#cecece] top-[40%]  transition-all cursor-pointer -rotate-90  pt-3 px-4 pb-6 select-none absolute `}>Filter</div>
              <div onClick={()=>setIsSkillsActive(true)} className={`font-bold text-2xl z-10 -left-5 hover:-left-3 bg-[#cecece] top-[40%]  transition-all cursor-pointer rotate-90  pt-3 px-4 pb-6 select-none absolute`}>Skills</div>
              {isFilterActive && <Tecnologies handlerShowFilter={handlerShowFilter} isFilterActive={isFilterActive}/>} 
              <Outlet/>
            </div>
          }
          <div>v2.0.0</div>
      </FilterContext.Provider>
    </div>
  )
}

