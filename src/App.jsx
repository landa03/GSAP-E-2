import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paralax from './Paralax'

import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 


function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const [count, setCount] = useState(0)

  let scrollable1Ref = useRef();
  let scrollable2Ref = useRef();
  let scrollable3Ref = useRef();

  let timeLine1 = new Timeline();
  let timeLine2 = new Timeline();
  let timeLine3 = new Timeline();


  useGSAP(() => {
    // ScrollTrigger: {}
    timeLine1.from(scrollable1Ref.current,{
      // y: 200, 
      x: -2000, 
      opacity: 0
    });
    timeLine1.to(scrollable1Ref.current,{
      scrollTrigger:{
        trigger: ".scrollable-1",
        start: "top+=-200 bottom",
        end: "top center",
        // markers: true,
        scrub: 1,
      },
      // y: 0, 
      x: 0,
      duration: 2,
      opacity: 1
    });


    timeLine2.from(scrollable2Ref.current,{
      y: 200, 
      opacity: 0
    });
    timeLine2.to(scrollable2Ref.current,{
      scrollTrigger:{
        trigger: ".scrollable-2",
        start: "top+=-200 bottom",
        end: "top center",
        // markers: true,
        scrub: 1,
      },
      y: 0, 
      // x: -200,
      duration: 2,
      opacity: 1
    });


    timeLine3.from(scrollable3Ref.current,{
      // y: 200, 
      opacity: 0
    });
    timeLine3.to(scrollable3Ref.current,{
      scrollTrigger:{
        trigger: ".scrollable-3",
        start: "top bottom",
        end: "top center",
        // markers: true,
        scrub: 1,
      },
      // y: 0, 
      // x: -200,
      duration: 2,
      opacity: 1
    });
  });

  return (
    <>
      <div id='dooky'>
        top page dooky
      </div>
      <div className='scrollable-1' ref={scrollable1Ref}>
        soy un segmento escroleable, soy el numero 1
      </div>
      <div className='scrollable-2' ref={scrollable2Ref}>
        soy un segmento escroleable, soy el numero 2
      </div>
      <div className='scrollable-3' ref={scrollable3Ref}>
        soy un segmento escroleable, soy el numero 3
      </div>
      <Paralax/>
      <div id='dooky'>
        top page dooky
      </div>
    </>
  )
}

export default App
