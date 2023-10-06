"use client";
import Link from "next/link";
import React from "react";
const NavBar = () => {   

    return (
        <nav
        className="bg-blue-500 p-4 text-white">
                     <Link
                         href="/?section=Home"
                         className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
                     >
                         <p className="p-10 border-1">
                                Home
                         </p>
                     </Link>
                     </nav>

        //             <Link
        //                 href="/?section=About"
        //                 className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
        //             >
        //                 <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
        //       About
        //                 </h4>
        //             </Link>

        //             <Link
        //                 href="/?section=Tools"
                        
        //                 className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
        //             >
        //                 <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
        //       Tools
        //                 </h4>
        //             </Link>

        //             <Link
        //                 href="/?section=Work"
        //                 className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
        //             >
        //                 <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
        //       Work
        //                 </h4>
        //             </Link>
        //             <Link
        //                 href="/?section=Contact"
        //                 className="border-solid border-0 rounded-3xl hover:border hover:transition-all hover:scale-x-95 hover:bg-gradient-to-r to-sky-800 from-stone-800 text-indigo-100 hover:text-indigo-50 border-indigo-100 hover:border-indigo-900"
        //             >
        //                 <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 hover:scale-x-105 transition-all">
        //       Contact
        //                 </h4>
        //             </Link>
        // </nav>
    );
};

export default NavBar;