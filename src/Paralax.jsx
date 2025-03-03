import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

export default function Paralax() {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    let paralaxRef = useRef();
    let timeLine1 = new Timeline();

    let paralaxContStyle = {
        width: "100%",
        // display: "flex",
        // flexDirection: "column",
        height: "180px",
        overflow: "hidden"
      }
    let paralaxBoyStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "360px",
        // overflow: "hidden"
      }
      let paralaxStyle1 = {
        width: "100%",
        backgroundColor: "red",
        minHeight: "30px"
      }
      let paralaxStyle2 = {
        width: "100%",
        backgroundColor: "green",
        minHeight: "30px"
      }
      let paralaxStyle3 = {
        width: "100%",
        backgroundColor: "blue",
        minHeight: "30px"
      }

    useGSAP(() => {
        timeLine1.from(paralaxRef.current,{
            y: "-50%"
        });
        timeLine1.to(paralaxRef.current,{
            scrollTrigger:{
                trigger: ".paralaxCont",
                // trigger: paralaxRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: true,
            },
            y: "0%",
            duration: 1,
            ease: "none"
        });
    });

    return(
        <>
            <div className='paralaxCont' style={paralaxContStyle}>
                <div className='paralax-boy' style={paralaxBoyStyle} ref={paralaxRef}>
                    <div style={paralaxStyle1}></div>
                    <div style={paralaxStyle2}></div>
                    <div style={paralaxStyle3}></div>
                    <div style={paralaxStyle1}></div>
                    <div style={paralaxStyle2}></div>
                    <div style={paralaxStyle3}></div>
                    <div style={paralaxStyle1}></div>
                    <div style={paralaxStyle2}></div>
                    <div style={paralaxStyle3}></div>
                    <div style={paralaxStyle1}></div>
                    <div style={paralaxStyle2}></div>
                    <div style={paralaxStyle3}></div>
                </div>
            </div>
        </>
    )


}