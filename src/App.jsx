import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';


function App() {
  const [count, setCount] = useState(0)
  let scrollable1 = useRef();
  let timeline1 = new.Timeline();
  let scrollable1Ref = useRef();
  
  useGSAP(() => {
    timeLine1.to(scrollable1Ref.current,{
      x: promoSegmentWidth, 
      duration: 3,
      // delay: 3,
    }
  );
  });

  return (
    <>
      <div className='scrollable-1'>
        soy un segmento escroleable, soy el numero 1
      </div>
      <div className='scrollable-2'>
        soy un segmento escroleable, soy el numero 2
      </div>
      <div className='scrollable-3'>
        soy un segmento escroleable, soy el numero 3
      </div>
    </>
  )
}

export default App
