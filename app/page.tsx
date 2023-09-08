"use client";
import React, {useState} from "react";
import { ScrollerMotion } from "scroller-motion";
import { useEffectOnce, useEventListener } from 'usehooks-ts';
import HeroBackground from "./components/background/HeroBackground";

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });
    // , a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]
    useBlobity(
        {
            licenseKey: "opensource",
            color: "#ffffff",
            dotColor: "#ffffff",
            focusableElements:
                "a, h4:not([data-no-blobity])",
            zIndex: 10,
            size: 100,
            radius: 20,
            magnetic: false
        }
    );

    return (
        <>
            <PreLoader />
            <Blur />
            <NavBar />
            <main
                className="my-0 mx-0 py-0 px-0"
            >
                <HeroBackground />
                {/*<About />
                <Work />
                <Tools /> */}
                { /* <Blog /> TODO: Low Priority */ }
                {/* <Contact />
                <Footer /> */}
            </main>
            {/*</ScrollerMotion>*/}
        </>
    );
}
