import React, {  useState } from 'react'
import WelcomeMessage from 'src/components/WelcomeMessage';
import Tecnologies from 'src/components/Tecnologies';

export const MainPage = (children) => {
  const [messegeStatus, setMessegeStatus] = useState(true);

  const changeMessageStatus = () => {
    setMessegeStatus(false)
  }

  return (
    <div className=' w-[100vw] h-[100vh] '>
      {messegeStatus ? <WelcomeMessage changeMessageStatus={changeMessageStatus}/> : 
        <div className=' font-bold text-2xl'>
          <Tecnologies/>
        </div>
      }
    </div>
  )
}

