import './App.css';
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
import GithubIcon from './assets/icons/github';
import { useNavigate } from 'react-router-dom';

function App() {

  const [isHovered, setIsHovered] = useState(false)
  const [isButtonDisplayed, setIsButtonDisplayed] = useState(false)
  const [isAnimationCompleted, setisAnimationCompleted] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    var tl = anime.timeline({
      duration: 200,
      easing: 'easeInOutSine',
      // loop: true
      complete: () => {
        setisAnimationCompleted(true)
      }
    });

    tl.add({
      targets: '.time-line .trnslate1 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81'
    })
    .add({
      targets: '.time-line .trnslate2 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate3 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate4 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 200,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate5 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 200,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate6 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 200,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate7 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 200,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate8 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 200,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate9 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate10 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate11 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate12 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 100,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate13 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 100,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate14 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 100,
      color: '#4adf81',
    })
    .add({
      targets: '.time-line .trnslate15 ',
      keyframes:[
        { translateY: 200  },
        { translateY: 0 }],
      duration: 100,
      color: '#4adf81',
    })
    
  }, [])

  const handleIsHovered = ()=>{
    if(!isAnimationCompleted){
      return
    }
    setIsButtonDisplayed(true)
    setIsHovered(true)
  }
  const handleIsNotHovered = ()=>{
    if(!isAnimationCompleted){
      return
    }
    setIsHovered(false)
  }
  
  const classStyleFonts = ' font-terminal  transition-all text-[#4c4c4c]'  

  const handleOnClick = () =>{
    anime({
      targets: '.body',
      translateY: '-100%',
      duration: 3500,
      update: function(anim) {
        Math.round(anim.progress) === 35 && navigate('/Main/projects')
      }
    })
  }

  return (
    <div className={`body select-none w-[100vw] relative h-[100vh] flex flex-col items-center justify-center ${isHovered ? 'bg-white' : 'bg-[#4c4c4c]'}  `}>
      <div className='z-20 text-2xl flex time-line cursor-not-allowed p-9' onMouseEnter={handleIsHovered} onMouseLeave={handleIsNotHovered}>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate1`}>h</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate2`}>e</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate3`}>l</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate4`}>l</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate5`}>l</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate6`}>0</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate7`}>_</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate8`}>w</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate9`}>0</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate10`}>r</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate11`}>l</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate12`}>d</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate13`}>.</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate14`}>.</div>
        <div className={`${classStyleFonts} ${isHovered && '!text-black'} trnslate15`}>.</div>
      </div>
      <div className={` z-10 -translate-y-[37px] text-sm ${isAnimationCompleted ? 'opacity-100': 'opacity-0' } transition-all text-[#858686]`}>(hover)</div>
      {
        isButtonDisplayed && <div onClick={handleOnClick} className={`hover:scale-110 transition-all absolute right-[5%] bottom-[10%] ${isHovered ? '!text-black !border-black': '!text-[#4adf81] !border-[#4adf81]'}  p-3 px-7 font-terminal text-xl mt-9 cursor-pointer border border-dashed `}>Continue -></div>
      }
      {
        isButtonDisplayed && <a href='https://github.com/zaratee' className={`hover:scale-125 transition-all absolute left-[5%] bottom-[10%] cursor-pointer  `}><GithubIcon color={isHovered ? '#000': '#4adf81'} size={'60px'}/></a>
      }
      <div className={` absolute right-0 bottom-0 ${isHovered ? 'text-black' :'text-white'}  font-terminal text-xs  `}>v2.0.0</div>
    </div>
  );
}

export default App;
