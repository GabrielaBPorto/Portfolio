"use client";
import React, {useState, useEffect} from "react";
import { ScrollerMotion } from "scroller-motion";
import { useEventListener } from 'usehooks-ts';
import { Router, useRouter } from 'next/router';
import HeroBackground from "./components/background/HeroBackground";
import gsap from "gsap";

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";


import NavBar from "./sections/NavBar";
import HomeTitle from "./sections/HomeTitle.tsx";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
// import {Router} from "next/router"

export default function Home() {
    gsap.set(['nav','#home','#about', '#work', '#skills', '#projects'], { opacity: 0 });
    
    // console.log('router', new Router('','',{}))

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
            window.scrollTo({
                top: 0,
                left: 0,
            });
            setIsMobile(window.innerWidth < 768);
    }, []);

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });
    useBlobity(
        {
            licenseKey: "opensource",
            color: "#1A202C",
            focusableElements:
                "a, h4:not([data-no-blobity])",
            zIndex: 1000,
            size: 100,
            radius: 20,
            magnetic: false
        }
    );

    return (
        <>
            <PreLoader />
            <NavBar />
            <main
                className="my-0 mx-0 py-0 px-0"
            >
                <HeroBackground />
                <HomeTitle />
                
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
