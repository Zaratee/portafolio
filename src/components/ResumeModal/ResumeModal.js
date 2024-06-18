import React, { useEffect, useState } from 'react'
import CrossIcon from 'src/assets/icons/cross'
import anime from 'animejs/lib/anime.es.js';
import GithubIcon from 'src/assets/icons/github';
import LinkedinIcon from 'src/assets/icons/linkedin';

export const ResumeModal = (props) => {
    const {handleShowResumeModal, isResumeActive} = props
    const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        if(!isResumeActive){
            return
            }
        anime({
            targets: '.modal',
            keyframes:[
                { translateY: '-150%'  },
                { translateY: '0%'  },],
            update: function(anim) {
                Math.round(anim.progress) === 50 && setShowModal(true)              
            },
            duration: 1000,  
        })
    },[isResumeActive])

    if(!isResumeActive){
        return
    }
    const onCloseModal = ()=>{
        handleShowResumeModal(false)
        setShowModal(false)
    }

  return (
    <div className={` w-[100vw] h-[100vh] absolute z-50 backdrop-blur-sm transition-all flex items-center justify-center`}>
        <div className={`modal ${showModal ? 'visible' : 'hidden'}  w-[70%] h-[70%] shadow-md shadow-black  bg-[#585858] p-5 relative`}>
            <div onClick={onCloseModal} className='absolute right-4 top-3 hover:bg-[#4d4c4c] cursor-pointer transition-all p-1'><CrossIcon/></div>
            <div className='font-bebas text-6xl text-slate-200'>
                CONTACT INFO
            </div>
            <div className='w-full h-[70%] flex  flex-col items-center justify-center gap-4 mt-3'>
                <div className='font-bebas text-5xl text-slate-200'>Carlos Zarate</div>
                <div className='font-bebas text-5xl text-slate-200'><span className='text-[#4adf81]'>+</span>52 3319431394</div>
                <div className='font-bebas text-5xl text-slate-200'>zarate251098<span className='text-[#4adf81]'>@</span>gmail<span className='text-[#4adf81]'>.</span>com</div>
            </div>
                <div className='flex justify-center w-[100%]'>
                    <a href='https://github.com/zaratee' className='-mt-2 mr-5'>
                        <GithubIcon color={'#e2e8f0'} size={70}/>
                    </a>
                    <a href='https://www.linkedin.com/in/carlos-zaratee/' className='ml-5'>
                        <LinkedinIcon color={'#e2e8f0'} size={55}/>
                    </a>
                </div>
        </div>
    </div>
  )
}

