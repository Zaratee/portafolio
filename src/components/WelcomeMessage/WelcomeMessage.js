import React, { useEffect, useState } from 'react'
import WelcomeSVG from 'src/assets/labels/welcome'
import anime from 'animejs/lib/anime.es.js';

export const WelcomeMessage = (props) => {
    const {changeMessageStatus} = props
    const [widthWelcome, setWidthWelcome] = useState(420)
    useEffect(() => {
        if(window.screen.width <= 500){
            setWidthWelcome(280)
            }
        anime({
            targets: '#welcome path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeOutQuad',
            duration: 2000,
            delay: function(el, i) { return i * 450 },
            direction: 'alternate',
            complete: changeMessageStatus
        });
        }, [])
  return (
    <div className=' w-[100%] h-[100%] flex items-center justify-center'>
      <div><WelcomeSVG width={widthWelcome}/></div>        
    </div>
  )
}

