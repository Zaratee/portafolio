import React, { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js';
import WelcomeSVG from 'src/assets/labels/welcome';

export const MainPage = (children) => {
  const [widthWelcome, setWidthWelcome] = useState(420)
    useEffect(() => {
      if(window.screen.width <= 500){
        setWidthWelcome(280)
        }
      anime({
        targets: '#welcome path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutQuad',
        duration: 2500,
        delay: function(el, i) { return i * 450 },
        direction: 'alternate',
      });
    }, [])

    
  return (
    <div className=' w-[100vw] h-[100vh] flex items-center justify-center'>
      <div ><WelcomeSVG width={widthWelcome}/></div>
    </div>
  )
}

