import React, { useEffect, useState } from 'react'
import CrossIcon from 'src/assets/icons/cross'
import anime from 'animejs/lib/anime.es.js';
import {  moreSkills } from 'src/proyectsData';
import SkillItem from './components/SkilIItem';

export const SkillsModal = (props) => {
    const {handleShowSkillsModal, isSkillsActive} = props
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        if(!isSkillsActive){
            return
            }
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
        <div className={`modal ${showModal ? 'visible' : 'hidden'}  w-[70%] h-[70%] shadow-md shadow-black  bg-[#585858] p-5 relative`}>
            <div onClick={onCloseModal} className='absolute right-4 top-3 hover:bg-[#4d4c4c] cursor-pointer transition-all p-1'><CrossIcon/></div>
            <div className='font-bebas text-6xl text-slate-200'>
                SKILLS
            </div>
            <div className=' relative  mt-3 overflow-y-auto h-[85%]'>
                <div className='w-full h-[50px] left-0 fixed bg-gradient-to-b from-[#585858]' />
                <div className='mt-[50px] mb-[50px] flex gap-3 flex-wrap '>
                {moreSkills.map((skill, index)=>(
                    <SkillItem key={index} skill={skill}/>
                ))}
                </div>
                <div className='w-full bottom-0 left-0 h-[90px] md:h-[50px] fixed bg-gradient-to-t from-[#585858]' />
            </div>
        </div>
    </div>
  )
}

