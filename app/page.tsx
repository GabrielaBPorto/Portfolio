"use client";
import React, {useState, useEffect} from "react";
import { ScrollerMotion } from "scroller-motion";
import { useEventListener } from 'usehooks-ts';
import { Router, useRouter } from 'next/router';
import HeroBackground from "./components/background/HeroBackground";
import gsap from "gsap";

import PreLoader from "./components/other/PreLoader";


import NavBar from "./sections/NavBar";
import HomeTitle from "./sections/HomeTitle.tsx";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
// import {Router} from "next/router"

export default function Home() {
    const returnSectionVisibility = ((name: string) => {
        if(currentSection && (currentSection === '' || currentSection===name)){
            return 'visible'
        }
        else {
            return 'invisible'
        }
    })
    const [currentSection, setCurrentSection ] = useState<string | null>(null);
    setCurrentSection(window.location.hash.split("#")[1])
    useEffect(() => {

    })
    return (
        <>
            <PreLoader />
            <NavBar />
            <main
                className="my-0 mx-0 py-0 px-0"
            >
                <HeroBackground />
                <HomeTitle className={` ${}`}/>
                
                <About />
{/*                <Work />
                <Tools /> */}
                { /* <Blog /> TODO: Low Priority */ }
                {/* <Contact />
                <Footer /> */}
            </main>
            {/*</ScrollerMotion>*/}
        </>
    );
}
