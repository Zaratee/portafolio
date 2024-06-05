import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

const MainPage = (children) => {
    useEffect(() => {
        setTimeout(()=>{
            anime({
              targets: '.mainBody',
              easing: 'linear',
              keyframes:[
                  { translateY: '-100%' }],
              delay: 1000
            })
        },1000)
    }, [])
    
  return (
    <div className='mainBody w-[100vw] h-[100vh] bg-slate-300 translate-y-[100%]'>MainPage</div>
  )
}

export default MainPage