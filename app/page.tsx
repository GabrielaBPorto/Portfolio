"use client";
import React, {useState, useEffect} from "react";
import { ScrollerMotion } from "scroller-motion";
import { useEventListener } from 'usehooks-ts';
import HeroBackground from "./components/background/HeroBackground";
import gsap from "gsap";
import { useRouter } from 'next/navigation'

import PreLoader from "./components/other/PreLoader";


import NavBar from "./sections/NavBar";
import HomeTitle from "./sections/HomeTitle.tsx";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";

export default function Home() {
    return (
        <>
            {/* <PreLoader />
            <NavBar />
            <main
                className="my-0 mx-0 py-0 px-0"
            >
                <HeroBackground />
                <HomeTitle />
                
                <About />
                <Work />
                <Tools />
                <Contact /> */}
                {/*<Footer /> */}
            {/* </main> */}
            {/*</ScrollerMotion>*/}
            <div>
                Teste
            </div>
        </>
    );
}
