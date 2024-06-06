import React, { useEffect, useState } from 'react'
import Ellipse from 'src/assets/forms/ellipse'
import anime from 'animejs/lib/anime.es.js';

export const Tecnologies = () => {
  const [isFilterActive, setIsFilterActive] = useState(undefined)
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  useEffect(() => {
    if(isFilterActive == undefined ){
      return
    }
    if(isFilterActive){
      anime({
        targets: '.filter',
        keyframes: [
          {translateX: 400},
          {translateX: 200},
        ],
        easing: 'easeOutQuad',
        update: function(anim) {
          Math.round(anim.progress) === 60 && setIsFilterVisible(true)
        }
      });
    }else{
      anime({
        targets: '.filter',
        keyframes: [
          {translateX: 200},
          {translateX: 400},
        ],
        easing: 'easeOutQuad',
      });
    }

  }, [isFilterActive])
  
  const handlerShowFilter = (value) => {
    setIsFilterActive(value)
  }

  return (
    <div className='flex relative justify-end items-center w-[100vw] h-[100vh]  overflow-hidden'>
        <div id='ellipse' className={`${isFilterVisible ? 'visible' : 'hidden'} z-20 filter absolute translate-x-[400px]`}><Ellipse handlerShowFilter={handlerShowFilter}/></div>
        <div onClick={()=>handlerShowFilter(true)} className=' bg-[#cecece] z-10 hover:translate-x-5 transition-all cursor-pointer -rotate-90 translate-x-6 pt-3 px-4 pb-6 select-none'>Filter</div>
    </div>
  )
}

