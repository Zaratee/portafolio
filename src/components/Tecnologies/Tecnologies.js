import React, { useEffect, useState } from 'react'
import Ellipse from 'src/assets/forms/ellipse'
import anime from 'animejs/lib/anime.es.js';

export const Tecnologies = (props) => {
  const {handlerShowFilter, isFilterActive} = props
  // const [isFilterActive, setIsFilterActive] = useState(undefined)
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  useEffect(() => {
    if(isFilterActive == undefined ){
      return
    }
    if(isFilterActive){
      anime({
        targets: '.filter',
        keyframes: [
          {translateX: 200},
          {translateX: -128},
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
          {translateX: 128},
          {translateX: 200},
        ],
        easing: 'easeOutQuad',
      });
    }

  }, [isFilterActive])


  return (
    <div className={`right-20 absolute top-[25%]`}>
        <div className='relative'>
            <div id='ellipse' className={`${isFilterVisible ? 'visible' : 'hidden'} z-50 filter absolute !top-[50%]`}><Ellipse handlerShowFilter={handlerShowFilter}/></div>
        </div>
    </div>
  )
}

