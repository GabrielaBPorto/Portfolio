"use client";
// import Link from "next/link";
// import {useRouter} from "next/navigation";
import { usePathname } from 'next/navigation'
// import Container from "../components/container/Container";
import React, {useEffect} from "react";

const NavBar = () => {   

    const router = usePathname();
    
    useEffect(() => {
        console.log('hehe', router)
    }, [router])
    return (
        <nav className="nowrap fixed bottom-20 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
            {/* <Container
                width="100%"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                
                <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
                    <Link
                        href="#home"
                        className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
              Home
                        </h4>
                    </Link>

                    <Link
                        href="#about"
                        className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
              About
                        </h4>
                    </Link>

                    <Link
                        href="#skills"
                        
                        className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
              Skills
                        </h4>
                    </Link>

                    <Link
                        href="#projects"
                        className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
              Projects
                        </h4>
                    </Link>
                    <Link
                        href="#contact"
                        className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
              Contact
                        </h4>
                    </Link>
                </nav>
            </Container> */}
        </nav>
    );
};

export default NavBar;
