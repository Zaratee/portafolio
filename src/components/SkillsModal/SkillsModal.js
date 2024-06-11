import React, { useEffect, useState } from 'react'
import CrossIcon from 'src/assets/icons/cross'
import anime from 'animejs/lib/anime.es.js';

export const SkillsModal = (props) => {
    const {handleShowSkillsModal, isSkillsActive} = props
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        console.log(isSkillsActive)
        if(!isSkillsActive){
            return
        }
        console.log('isSkillsActive')
        anime({
            targets: '.modal',
            keyframes:[
                { translateX: '-150%'  },
                { translateX: '0%'  },],
            update: function(anim) {
                Math.round(anim.progress) === 50 && setShowModal(true)              
            },
            duration: 1000,  
        })
    },[isSkillsActive])
                    
    if(!isSkillsActive){
        return
    }
    const onCloseModal = ()=>{
        handleShowSkillsModal(false)
        setShowModal(false)

    }
  return (
    <div className={` w-[100vw] h-[100vh] absolute z-50 backdrop-blur-sm transition-all flex items-center justify-center`}>
        <div className={`modal ${showModal ? 'visible' : 'hidden'}  w-[70%] h-[70%] shadow-md shadow-black  bg-white p-5 relative`}>
            <div onClick={onCloseModal} className='absolute right-4 top-3 hover:bg-slate-200 cursor-pointer transition-all p-1'><CrossIcon/></div>
            <div className='font-bebas text-black text-6xl'>
                SKILLS
            </div>
        </div>
    </div>
  )
}

